import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
    return {
        rules:[
            {
                userAgent: "*",
                allow: "/"
            }
        ],
        sitemap: 'https://ayrton-senna-three.vercel.app/sitemap.xml'
    }
}