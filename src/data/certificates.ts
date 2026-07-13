export interface Certificate {
  title: string;
  issuer: string;
  logo?: string;
  logoSize?: string;
  link: string;
  isLocal: boolean;
  richIssuer?: string;
  certificateImage?: string;
}

export interface CertificateYear {
  year: number;
  certificates: Certificate[];
}

/** Certificates will be added later. */
export const certificatesByYear: CertificateYear[] = [];
