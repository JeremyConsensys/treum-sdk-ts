/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface DeleteOrganizationEmailTemplatePath {
  /** SafeString */
  templateType: string;
}

export const deleteOrganizationEmailTemplatePathSchema: Schema<DeleteOrganizationEmailTemplatePath> = object(
  { templateType: ['template_type', string()] }
);
