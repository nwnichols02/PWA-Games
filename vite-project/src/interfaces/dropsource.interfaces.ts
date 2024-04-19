export interface TicketExt {
    Ticket: Ticket;
    Raised: Raised;
    Status: Status;
    Type: Type;
    Assignee: Assignee;
    CustomerEntity: CustomerEntity;
    TicketHistoryId: number;
    Context: string;
}

export interface TicketData {
    CustomFieldValues: CustomFieldValue;
    TicketExt: TicketExt;
}

interface Type {
    TypeId: number;
    Name: string;
    Description: string;
};

interface Status {
    StatusId: number;
    Name: string;
    Color: number;
    Flags: number;
};

interface Ticket {
    TId: number;
    StatusId: number;
    Assignee: number;
    Customer: number;
    RaisedBy: number;
    TypeId: number;
    Priority: string;
    CreateTime: string;
    LastUpdated: string;
    LastUpdatedBy: number;
    DeleteTime: string;
    DueDate: string;
    Title: string;
    EClassID: number;
    Revision: number;
    ClientName: string;
    ClientAddress: string;
    ClientPhone: string;
    ClientEmail: string;
    ClosedDate: string;
    ScheduledInstallDate: string;
    TimeZoneOffset: string;
    TimeZone: string;
    FieldJson: string;
};

interface Raised {
    AgentId: number;
    Name: string;
    Flags: number;
    Email: string;
    Phone: string;
    EClassID: number;
    RoleId: number;
    Customer: number;
    ArchiveTime: string;
    AgentType: number;
    DisabledDate: string;
    DisabledBy: number;
    FilterFeatureOn: boolean;
    TimeZoneOffset: string;
    TimeZone: string;
};

interface Assignee {
    AgentId: number;
    Name: string;
    Flags: number;
    Email: string;
    Phone: string;
    EClassID: number;
    RoleId: number;
    Customer: number;
    ArchiveTime: string;
    AgentType: number;
    DisabledDate: string;
    DisabledBy: number;
    FilterFeatureOn: boolean;
    TimeZoneOffset: string;
    TimeZone: string;
};

interface CustomerEntity {
    CustomerEntId: number;
    EntName: string;
    Description: string;
    EntAddress: string;
    RoleId: number;
    Phone: string;
    Open: string;
    Close: string;
    EmailMatch: string;
    ArchiveTime: string;
};

interface Meta {
    Cid: number;
    Name: string;
  }
  
  interface ValueMeta {
    C: {
      Meta: Meta;
      TypeId: number;
      ReportHeaderId: number;
    };
  }
  
  interface Value {
    Str?: string;
    MyInt?: number;
    SelectedOpt?: string;
  }
  
  export interface CustomFieldValue {
    ValueMeta: ValueMeta;
    Value: Value;
  }