import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {visionTool} from '@sanity/vision'
import schemas from "./sanity/schemas";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ""
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? ""
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? ""


const config = defineConfig({
  projectId,
  dataset,
  apiVersion,
  name: 'default',
  title: "sanity-real-estate",
  basePath: "/admin",
  plugins: [deskTool(),visionTool({
    defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
  })],
  schema: { types: schemas }
})


export default config