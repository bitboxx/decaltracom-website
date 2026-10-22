export interface SiteConfig {
  allowedOrigins: string[]; // e.g., ['pixeau.nl', 'subdomain.pixeau.nl']
  toAddress: string;
  fromAddress: string; // Should be a verified sender in your email service
  notificationSenderName: string;
  notificationRecipientName: string;
  /** The mailbox the Worker sends as; the app registration may send as nothing else. */
  senderAddress: string;
  /** Secret names: the Entra tenant, the app registration and its client secret. */
  tenantSecretName: string;
  clientIdSecretName: string;
  clientSecretSecretName: string;
  notificationEmailSenderName?: string;
  sendConfirmation?: boolean;
}

export type AppConfig = SiteConfig[];

export const configurations: AppConfig = [
  {
    allowedOrigins: ['decaltra.com'],
    toAddress: 'info@decaltra.com',
    fromAddress: 'info@decaltra.com',
    notificationSenderName: 'Decaltra.com',
    notificationRecipientName: 'Decaltra',
    senderAddress: 'website@decaltra.com',
    tenantSecretName: 'DECALTRACOM_GRAPH_TENANT',
    clientIdSecretName: 'DECALTRACOM_GRAPH_CLIENT_ID',
    clientSecretSecretName: 'DECALTRACOM_GRAPH_CLIENT_SECRET',
    notificationEmailSenderName: 'The Decaltra Team',
    sendConfirmation: true,
  },
];

export const getSiteConfigByOrigin = (origin: string | null): SiteConfig | undefined => {
  if (!origin) {
    return undefined;
  }
  for (const config of configurations) {
    // Check if the origin string contains any of the allowed origin substrings
    if (config.allowedOrigins.some(allowedOriginSubstring => origin.includes(allowedOriginSubstring))) {
      return config;
    }
  }
  return undefined;
};
