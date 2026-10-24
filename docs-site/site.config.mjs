// Keep the project URL until a custom-domain switch has been approved.
export const site = process.env.DOCS_SITE || 'https://shyzoscorp.github.io';
export const base = (process.env.DOCS_BASE || '/Dimensional-Chaos-Issues').replace(/\/$/, '') || '/';
export const rootURL = new URL(`${base === '/' ? '' : base}/`, site);
