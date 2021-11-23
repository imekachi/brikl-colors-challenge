/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ColorTypes } from "./global";

// ====================================================
// GraphQL query operation: GenerateSwatch
// ====================================================

export interface GenerateSwatch_generateSwatch {
  __typename: "Color";
  format: ColorTypes;
  value: string;
}

export interface GenerateSwatch {
  generateSwatch: GenerateSwatch_generateSwatch[];
}
