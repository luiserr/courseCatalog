/**
 * Utilidad para limpiar HTML básico y prevenir ataques XSS
 * mientras mantiene el formato visual esencial
 */

/**
 * Limpia HTML eliminando elementos peligrosos pero manteniendo formato básico
 * @param {string} htmlString - String HTML a limpiar
 * @returns {string} HTML limpio y seguro
 */
export const createSafeHTML = (htmlString) => {
  if (!htmlString) return '';
  
  // Eliminar scripts y elementos peligrosos pero mantener formato básico
  const cleanHTML = htmlString
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '') // Eliminar eventos onclick, onload, etc.
    .replace(/javascript:/gi, ''); // Eliminar javascript: en enlaces
  
  return cleanHTML;
};

/**
 * Crea un objeto compatible con dangerouslySetInnerHTML de React
 * @param {string} htmlString - String HTML a limpiar
 * @returns {object} Objeto con propiedad __html para React
 */
export const createSafeHTMLObject = (htmlString) => {
  return { __html: createSafeHTML(htmlString) };
};