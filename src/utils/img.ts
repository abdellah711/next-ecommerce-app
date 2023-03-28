export const urlFor = (source: string) => {
    if (source.startsWith('http')) return source;
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${source}`;
} 