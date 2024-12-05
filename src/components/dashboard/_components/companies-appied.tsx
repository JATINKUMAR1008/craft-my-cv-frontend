import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon } from "lucide-react";
import React from "react";

export const CompaniesAppliedTo = () => {
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Applications</h1>
      </header>
      <main className="w-full h-full mt-5 border shadow-md">
        <Table className="h-full">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Resume</TableHead>
              <TableHead>Job Description</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="">Applied At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="gap-2 h-full overflow-auto">
            <TableRow>
              <TableCell>
                <h1 className="text-sm font-semibold">Google</h1>
              </TableCell>
              <TableCell>
                <p className="text-sm font-semibold">Resume-attra.pdf</p>
              </TableCell>
              <TableCell>
                <Button variant={"link"}>Click Here</Button>
              </TableCell>
              <TableCell>
                <div className="flex flex-col max-w-[60px] space-y-0">
                  <Badge className="flex justify-center items-center">
                    70%
                  </Badge>
                  <Button variant={"link"}>More info</Button>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <CheckIcon size={16} />
                    <span className="font-semibold capitalize">Applied</span>
                  </div>
                  <div className="text-xs text-muted-foreground mx-5">
                    1 day ago
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <p>1 August, 2024</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  );
};
