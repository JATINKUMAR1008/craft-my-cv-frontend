import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export const BreadcrumbHeader = ({ path }: { path: string[] }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {path.map((item, index) => (
          <React.Fragment key={index}>
            {index !== path.length - 1 ? (
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/${item}`}
                  className="hidden md:block"
                >
                  {item === "" ? "Home" : item}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage className="hidden md:block capitalize">
                  {item === "" ? "Home" : item}
                </BreadcrumbPage>
              </BreadcrumbItem>
            )}

            {index !== path.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
