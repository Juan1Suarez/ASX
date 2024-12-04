import Cotizacion from "../model/cotizacion";
import clienteAxios from "./Axios";
import moment from "moment-timezone";

export async function verEmpresas() {
  try {
    const response = await clienteAxios.get('/empresas');
    return response.data;
  } catch (error) {
    console.error('Error fetching empresas:', error);
    return [];
  }
}

export async function verCotizaciones() {
  try {
    const response = await clienteAxios.get('/cotizaciones');
    return response.data;
  } catch (error) {
    console.error('Error fetching cotizaciones:', error);
    return [];
  }
}

export async function verIndices() {
  try {
    const response = await clienteAxios.get('/indices/porCodigo');
    return response.data;
  } catch (error) {
    console.error('Error fetching indices:', error);
    return [];
  }
}

export async function verIndicesCotizaciones() {
  try {
    const response = await clienteAxios.get('/indices');
    return response.data;
  } catch (error) {
    console.error('Error fetching indices:', error);
    return [];
  }
}

interface CotizacionesPorEmpresa {
  [empresa: string]: number;
}

export async function graficoPieMes() {
  try {
    const cotizaciones: Cotizacion[] = await verCotizaciones();
    const fechaActual = new Date();
    
    const fechaHace30Dias = new Date(fechaActual);
    fechaHace30Dias.setDate(fechaActual.getDate() - 30);

    const cotizacionesUltimos30Dias = cotizaciones.filter(cotizacion => {
      const fechaCotizacion = new Date(cotizacion.fecha);
      return fechaCotizacion >= fechaHace30Dias && fechaCotizacion <= fechaActual;
    });

    const cotizacionesPorEmpresa: CotizacionesPorEmpresa = cotizacionesUltimos30Dias.reduce((acc, cotizacion) => {
      const empresaId = cotizacion.empresa;
      const cotizacionValor = cotizacion.cotizacion;

      if (!acc[empresaId]) {
        acc[empresaId] = 0;
      }

      acc[empresaId] += cotizacionValor;

      return acc;
    }, {} as CotizacionesPorEmpresa);

    const totalCotizaciones = Object.values(cotizacionesPorEmpresa).reduce((sum, value) => sum + value, 0);

    const participacionEmpresas = Object.entries(cotizacionesPorEmpresa).map(([empresaId, cotizacionTotal]) => ({
      empresa: empresaId,
      cotizacion: (cotizacionTotal / totalCotizaciones) * 100,
    }));
    return participacionEmpresas;
  } catch (error) {
    console.error('Error al obtener y agrupar cotizaciones:', error);
    return [];
  }
}

export async function graficoPieDia() {
  try {
    const cotizaciones: Cotizacion[] = await verCotizaciones();

    const fechaActual = moment.tz('Australia/Sydney');
    const inicioDiaAnterior = fechaActual.clone().subtract(1, 'days').set({ hour: 9, minute: 0, second: 0, millisecond: 0 });
    const finDiaAnterior = fechaActual.clone().subtract(1, 'days').set({ hour: 15, minute: 0, second: 0, millisecond: 0 });

    const cotizacionesUltimoDia = cotizaciones.filter(cotizacion => {
      const fechaCotizacion = moment.tz(`${cotizacion.fecha} ${cotizacion.hora}`, 'YYYY-MM-DD HH:mm', 'Australia/Sydney');
      return fechaCotizacion.isBetween(inicioDiaAnterior, finDiaAnterior, null, '[]'); 
    });
    
    if (cotizacionesUltimoDia.length === 0) {
      return [];
    }

    const cotizacionesPorEmpresa = cotizacionesUltimoDia.reduce((acc, cotizacion) => {
      const empresaId = cotizacion.empresa;
      const cotizacionValor = cotizacion.cotizacion;
      if (!acc[empresaId]) acc[empresaId] = 0;
      acc[empresaId] += cotizacionValor;
      return acc;
    }, {} as CotizacionesPorEmpresa);

    const totalCotizaciones = Object.values(cotizacionesPorEmpresa).reduce((sum, value) => sum + value, 0);
    if (totalCotizaciones === 0) return [];  

    const participacionEmpresas = Object.entries(cotizacionesPorEmpresa).map(([empresaId, cotizacionTotal]) => ({
      empresa: empresaId,
      cotizacion: (cotizacionTotal / totalCotizaciones) * 100,
    }));

    return participacionEmpresas;
  } catch (error) {
    console.error('Error al obtener y agrupar cotizaciones:', error);
    return [];
  }
}


