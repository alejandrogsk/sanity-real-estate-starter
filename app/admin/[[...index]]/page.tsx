"use client";
import config from "@/sanity.config";
import { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";


export default function AdminPage(){
    return <NextStudio config={config} />
}