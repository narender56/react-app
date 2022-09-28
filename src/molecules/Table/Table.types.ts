export interface TableHeader {
  label: string;
  key: string;
  order: string;
}

export interface TableProps {
  testId: string;
  headers: TableHeader[];
  data: any[];
}
