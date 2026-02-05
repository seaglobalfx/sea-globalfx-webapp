"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { schemaMap } from "./schema";

function PageSchema() {
  const path = usePathname();
  
  const schemaData = useMemo(() => {
    return schemaMap.get(path);
  }, [path]);

  if (!schemaData) return null;
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}
export default PageSchema;