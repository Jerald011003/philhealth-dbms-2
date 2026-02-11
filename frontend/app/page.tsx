"use client";

import { useState } from "react";

// SVG Icon Components
const Icons = {
  Members: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Contributions: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Claims: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Hospitals: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  HealthPlans: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  Transactions: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  Beneficiaries: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Employers: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  AuditLogs: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Sessions: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  Menu: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Search: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Filter: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  ),
  Edit: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  Trash: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
  Plus: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  Refresh: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

// Mock Data Generator Helper
const generateId = () => Math.random().toString(36).substr(2, 9) + '-' + Date.now();

// Initial Mock Data for all entities
const initialMockData = {
  members: [
    { id: "MEM-" + generateId(), member_id: "PH-2024-001234", first_name: "Juan", last_name: "Dela Cruz", email: "juan.delacruz@email.com", phone: "+63 912 345 6789", membership_type: "Employed", status: "Active", registration_date: "2024-01-15", birth_date: "1985-05-20", address: "123 Manila St, Quezon City" },
    { id: "MEM-" + generateId(), member_id: "PH-2024-001235", first_name: "Maria", last_name: "Santos", email: "maria.santos@email.com", phone: "+63 917 234 5678", membership_type: "Individual", status: "Active", registration_date: "2024-02-20", birth_date: "1990-08-15", address: "456 Rizal Ave, Makati City" },
    { id: "MEM-" + generateId(), member_id: "PH-2024-001236", first_name: "Jose", last_name: "Reyes", email: "jose.reyes@email.com", phone: "+63 920 345 6789", membership_type: "OFW", status: "Active", registration_date: "2024-03-10", birth_date: "1988-12-03", address: "789 Bonifacio St, Manila" },
    { id: "MEM-" + generateId(), member_id: "PH-2024-001237", first_name: "Ana", last_name: "Garcia", email: "ana.garcia@email.com", phone: "+63 915 456 7890", membership_type: "Senior", status: "Active", registration_date: "2024-01-25", birth_date: "1958-03-22", address: "321 Luna St, Pasig City" },
    { id: "MEM-" + generateId(), member_id: "PH-2024-001238", first_name: "Pedro", last_name: "Ramos", email: "pedro.ramos@email.com", phone: "+63 918 567 8901", membership_type: "Sponsored", status: "Active", registration_date: "2024-02-05", birth_date: "1995-07-18", address: "654 Del Pilar St, Cebu City" },
  ],
  contributions: [
    { id: "CON-" + generateId(), contribution_id: "CONT-2024-00123", member_id: "PH-2024-001234", amount: "₱1,200.00", payment_date: "2024-02-01", payment_method: "Bank Transfer", status: "Paid", period: "January 2024", employer_contribution: "₱800.00", employee_contribution: "₱400.00" },
    { id: "CON-" + generateId(), contribution_id: "CONT-2024-00124", member_id: "PH-2024-001235", amount: "₱1,200.00", payment_date: "2024-02-03", payment_method: "Over the Counter", status: "Paid", period: "January 2024", employer_contribution: "₱0.00", employee_contribution: "₱1,200.00" },
    { id: "CON-" + generateId(), contribution_id: "CONT-2024-00125", member_id: "PH-2024-001236", amount: "₱1,800.00", payment_date: "2024-02-05", payment_method: "Online Payment", status: "Paid", period: "January 2024", employer_contribution: "₱0.00", employee_contribution: "₱1,800.00" },
    { id: "CON-" + generateId(), contribution_id: "CONT-2024-00126", member_id: "PH-2024-001237", amount: "₱600.00", payment_date: "2024-02-07", payment_method: "Cash", status: "Paid", period: "January 2024", employer_contribution: "₱0.00", employee_contribution: "₱600.00" },
  ],
  claims: [
    { id: "CLM-" + generateId(), claim_id: "CLM-2024-00567", member_id: "PH-2024-001234", hospital_id: "HOSP-001", claim_type: "Hospitalization", claim_amount: "₱45,000.00", approved_amount: "₱42,000.00", claim_date: "2024-01-20", status: "Approved", diagnosis: "Pneumonia", admission_date: "2024-01-18", discharge_date: "2024-01-22" },
    { id: "CLM-" + generateId(), claim_id: "CLM-2024-00568", member_id: "PH-2024-001235", hospital_id: "HOSP-002", claim_type: "Outpatient", claim_amount: "₱5,500.00", approved_amount: "₱5,500.00", claim_date: "2024-02-01", status: "Approved", diagnosis: "Routine Check-up", admission_date: "2024-02-01", discharge_date: "2024-02-01" },
    { id: "CLM-" + generateId(), claim_id: "CLM-2024-00569", member_id: "PH-2024-001236", hospital_id: "HOSP-003", claim_type: "Emergency", claim_amount: "₱18,000.00", approved_amount: "₱15,000.00", claim_date: "2024-02-05", status: "Processing", diagnosis: "Appendicitis", admission_date: "2024-02-04", discharge_date: "2024-02-06" },
  ],
  hospitals: [
    { id: "HOSP-" + generateId(), hospital_id: "HOSP-001", name: "Philippine General Hospital", type: "Government", level: "Tertiary", address: "Taft Avenue, Manila", contact: "+63 2 8554 8400", accreditation_status: "Accredited", accreditation_date: "2023-01-15", bed_capacity: "1500", emergency_capable: "Yes" },
    { id: "HOSP-" + generateId(), hospital_id: "HOSP-002", name: "St. Luke's Medical Center", type: "Private", level: "Tertiary", address: "E. Rodriguez Sr. Ave, Quezon City", contact: "+63 2 8723 0101", accreditation_status: "Accredited", accreditation_date: "2023-03-20", bed_capacity: "650", emergency_capable: "Yes" },
    { id: "HOSP-" + generateId(), hospital_id: "HOSP-003", name: "Veterans Memorial Medical Center", type: "Government", level: "Tertiary", address: "North Avenue, Quezon City", contact: "+63 2 8927 5555", accreditation_status: "Accredited", accreditation_date: "2023-06-10", bed_capacity: "1000", emergency_capable: "Yes" },
    { id: "HOSP-" + generateId(), hospital_id: "HOSP-004", name: "Manila Doctors Hospital", type: "Private", level: "Secondary", address: "UN Avenue, Manila", contact: "+63 2 8558 0888", accreditation_status: "Accredited", accreditation_date: "2023-02-28", bed_capacity: "350", emergency_capable: "Yes" },
  ],
  health_plans: [
    { id: "PLAN-" + generateId(), plan_id: "PLN-001", plan_name: "Basic Coverage Plan", description: "Essential health coverage for primary care and emergency services", monthly_premium: "₱1,200.00", coverage_limit: "₱150,000.00", status: "Active", effective_date: "2024-01-01", deductible: "₱2,000.00" },
    { id: "PLAN-" + generateId(), plan_id: "PLN-002", plan_name: "Enhanced Coverage Plan", description: "Comprehensive coverage including specialist consultations and diagnostics", monthly_premium: "₱2,500.00", coverage_limit: "₱500,000.00", status: "Active", effective_date: "2024-01-01", deductible: "₱5,000.00" },
    { id: "PLAN-" + generateId(), plan_id: "PLN-003", plan_name: "Premium Family Plan", description: "Full coverage for family including dental and optical care", monthly_premium: "₱5,000.00", coverage_limit: "₱1,000,000.00", status: "Active", effective_date: "2024-01-01", deductible: "₱10,000.00" },
  ],
  transactions: [
    { id: "TXN-" + generateId(), transaction_id: "TXN-2024-123456", member_id: "PH-2024-001234", type: "Payment", amount: "₱1,200.00", date: "2024-02-01", status: "Completed", reference_number: "REF-20240201-001", payment_method: "Bank Transfer", description: "Monthly contribution payment" },
    { id: "TXN-" + generateId(), transaction_id: "TXN-2024-123457", member_id: "PH-2024-001235", type: "Payment", amount: "₱1,200.00", date: "2024-02-03", status: "Completed", reference_number: "REF-20240203-002", payment_method: "Over the Counter", description: "Monthly contribution payment" },
    { id: "TXN-" + generateId(), transaction_id: "TXN-2024-123458", member_id: "PH-2024-001234", type: "Claim Reimbursement", amount: "₱42,000.00", date: "2024-02-10", status: "Pending", reference_number: "REF-20240210-003", payment_method: "Bank Transfer", description: "Hospitalization claim reimbursement" },
  ],
  beneficiaries: [
    { id: "BEN-" + generateId(), beneficiary_id: "BEN-2024-001", member_id: "PH-2024-001234", first_name: "Sofia", last_name: "Dela Cruz", relationship: "Daughter", birth_date: "2015-03-12", status: "Active", registration_date: "2024-01-15" },
    { id: "BEN-" + generateId(), beneficiary_id: "BEN-2024-002", member_id: "PH-2024-001234", first_name: "Miguel", last_name: "Dela Cruz", relationship: "Son", birth_date: "2018-07-25", status: "Active", registration_date: "2024-01-15" },
    { id: "BEN-" + generateId(), beneficiary_id: "BEN-2024-003", member_id: "PH-2024-001235", first_name: "Rosa", last_name: "Santos", relationship: "Mother", birth_date: "1965-11-30", status: "Active", registration_date: "2024-02-20" },
  ],
  employers: [
    { id: "EMP-" + generateId(), employer_id: "EMP-2024-001", company_name: "Ayala Corporation", industry: "Conglomerate", address: "Ayala Avenue, Makati City", contact: "+63 2 8848 5555", email: "hr@ayala.com", total_employees: "45000", status: "Active", registration_date: "2020-01-15" },
    { id: "EMP-" + generateId(), employer_id: "EMP-2024-002", company_name: "SM Prime Holdings", industry: "Retail", address: "Mall of Asia Complex, Pasay City", contact: "+63 2 8857 7777", email: "hr@smprime.com", total_employees: "85000", status: "Active", registration_date: "2019-06-20" },
    { id: "EMP-" + generateId(), employer_id: "EMP-2024-003", company_name: "Globe Telecom", industry: "Telecommunications", address: "The Globe Tower, BGC, Taguig", contact: "+63 2 7730 1000", email: "hr@globe.com.ph", total_employees: "12000", status: "Active", registration_date: "2018-03-10" },
  ],
  audit_logs: [
    { id: "AUD-" + generateId(), log_id: "LOG-2024-00001", user_id: "admin@philhealth.gov.ph", action: "UPDATE", table_name: "members", record_id: "PH-2024-001234", timestamp: "2024-02-11 10:30:15", ip_address: "192.168.1.100", description: "Updated member contact information" },
    { id: "AUD-" + generateId(), log_id: "LOG-2024-00002", user_id: "admin@philhealth.gov.ph", action: "INSERT", table_name: "claims", record_id: "CLM-2024-00569", timestamp: "2024-02-11 11:15:42", ip_address: "192.168.1.100", description: "New claim submission" },
    { id: "AUD-" + generateId(), log_id: "LOG-2024-00003", user_id: "staff@philhealth.gov.ph", action: "UPDATE", table_name: "contributions", record_id: "CONT-2024-00126", timestamp: "2024-02-11 14:22:33", ip_address: "192.168.1.105", description: "Payment status updated" },
  ],
  user_sessions: [
    { id: "SES-" + generateId(), session_id: "SES-2024-ABC123", user_id: "admin@philhealth.gov.ph", role: "Administrator", login_time: "2024-02-11 08:00:00", last_activity: "2024-02-11 10:45:30", ip_address: "192.168.1.100", status: "Active", device: "Windows PC - Chrome" },
    { id: "SES-" + generateId(), session_id: "SES-2024-DEF456", user_id: "staff@philhealth.gov.ph", role: "Staff", login_time: "2024-02-11 09:15:00", last_activity: "2024-02-11 10:30:15", ip_address: "192.168.1.105", status: "Inactive", device: "MacBook - Safari" },
  ],
};

export default function Home() {
  const [selectedTable, setSelectedTable] = useState("members");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("data");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingCell, setEditingCell] = useState<{rowId: string, field: string} | null>(null);
  const [editValue, setEditValue] = useState("");
  
  // CRUD State Management
  const [tableData, setTableData] = useState<any>(initialMockData);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [isAddingRow, setIsAddingRow] = useState(false);
  const [newRowData, setNewRowData] = useState<any>({});
  
  const tables = [
    { name: "members", rows: tableData.members.length.toString(), icon: "Members", label: "Patient Members" },
    { name: "contributions", rows: tableData.contributions.length.toString(), icon: "Contributions", label: "Health Contributions" },
    { name: "claims", rows: tableData.claims.length.toString(), icon: "Claims", label: "Medical Claims" },
    { name: "hospitals", rows: tableData.hospitals.length.toString(), icon: "Hospitals", label: "Healthcare Facilities" },
    { name: "health_plans", rows: tableData.health_plans.length.toString(), icon: "HealthPlans", label: "Coverage Plans" },
    { name: "transactions", rows: tableData.transactions.length.toString(), icon: "Transactions", label: "Payment Transactions" },
    { name: "beneficiaries", rows: tableData.beneficiaries.length.toString(), icon: "Beneficiaries", label: "Dependents" },
    { name: "employers", rows: tableData.employers.length.toString(), icon: "Employers", label: "Corporate Partners" },
    { name: "audit_logs", rows: tableData.audit_logs.length.toString(), icon: "AuditLogs", label: "System Logs" },
    { name: "user_sessions", rows: tableData.user_sessions.length.toString(), icon: "Sessions", label: "Active Sessions" },
  ];

  const currentTableData = tableData[selectedTable] || [];
  const currentTableInfo = tables.find(t => t.name === selectedTable);
  const IconComponent = Icons[currentTableInfo?.icon as keyof typeof Icons] || Icons.Members;

  // Get columns from first row of data
  const columns = currentTableData.length > 0 ? Object.keys(currentTableData[0]).filter(key => key !== 'id') : [];

  // CRUD Operations
  const handleCellEdit = (rowId: string, field: string, value: any) => {
    setTableData((prev: any) => ({
      ...prev,
      [selectedTable]: prev[selectedTable].map((row: any) =>
        row.id === rowId ? { ...row, [field]: value } : row
      ),
    }));
    setEditingCell(null);
  };

  const handleDeleteRow = (rowId: string) => {
    if (confirm('Are you sure you want to delete this record?')) {
      setTableData((prev: any) => ({
        ...prev,
        [selectedTable]: prev[selectedTable].filter((row: any) => row.id !== rowId),
      }));
    }
  };

  const handleDeleteSelected = () => {
    if (selectedRows.size === 0) return;
    if (confirm(`Are you sure you want to delete ${selectedRows.size} selected record(s)?`)) {
      setTableData((prev: any) => ({
        ...prev,
        [selectedTable]: prev[selectedTable].filter((row: any) => !selectedRows.has(row.id)),
      }));
      setSelectedRows(new Set());
    }
  };

  const handleAddRow = () => {
    const newRow: any = { id: selectedTable.toUpperCase() + "-" + generateId() };
    columns.forEach(col => {
      newRow[col] = newRowData[col] || '';
    });
    
    setTableData((prev: any) => ({
      ...prev,
      [selectedTable]: [newRow, ...prev[selectedTable]],
    }));
    setIsAddingRow(false);
    setNewRowData({});
  };

  const toggleRowSelection = (rowId: string) => {
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(rowId)) {
        newSet.delete(rowId);
      } else {
        newSet.add(rowId);
      }
      return newSet;
    });
  };

  const toggleSelectAll = () => {
    if (selectedRows.size === currentTableData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentTableData.map((row: any) => row.id)));
    }
  };

  const filteredData = currentTableData.filter((row: any) => {
    if (!searchTerm) return true;
    return Object.values(row).some((value: any) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="h-screen flex flex-col bg-gray-50 text-gray-900 overflow-hidden">
      {/* Top Navigation Bar */}
      <nav className="h-14 bg-white border-b border-gray-200 flex items-center px-4 lg:px-6 gap-4 flex-shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          <img 
            src="/images_PhilHealth_Logo.png" 
            alt="PhilHealth - Your Partner in Health" 
            className="h-10"
          />
        </div>
        
        <button 
          className="lg:hidden ml-auto p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
        </button>
        
        {/* <div className="hidden lg:flex items-center gap-2 ml-4">
          <select className="bg-gray-50 text-gray-900 text-sm px-3 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#009E49] focus:border-transparent">
            <option>philhealth_prod</option>
            <option>philhealth_staging</option>
            <option>philhealth_dev</option>
          </select>
        </div> */}
        
        <div className="hidden lg:flex ml-auto items-center gap-2">
          <button className="text-gray-600 hover:text-[#009E49] text-sm px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors font-medium">
            Export
          </button>
          <button className="text-gray-600 hover:text-[#009E49] text-sm px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors font-medium">
            Import
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-[#F4C400] to-[#F4C400] rounded-full flex items-center justify-center text-[#009E49] font-bold text-xs shadow-md ml-2">
            AD
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className={`
          ${sidebarCollapsed ? 'w-14' : 'w-64'} 
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          fixed lg:relative inset-y-0 left-0 z-50
          bg-white border-r border-gray-200 flex flex-col transition-all duration-300 shadow-lg lg:shadow-none
        `}>
          <div className="h-12 border-b border-gray-200 flex items-center justify-between px-3 bg-gray-50">
            {!sidebarCollapsed && <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Tables</span>}
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 text-gray-500 hover:text-[#009E49] hover:bg-gray-100 rounded transition-colors"
            >
              {sidebarCollapsed ? '→' : '←'}
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2">
            {!sidebarCollapsed ? (
              <div className="space-y-1">
                {tables.map((table) => {
                  const IconComp = Icons[table.icon as keyof typeof Icons];
                  return (
                    <button 
                      key={table.name}
                      onClick={() => {
                        setSelectedTable(table.name);
                        setMobileMenuOpen(false);
                        setSelectedRows(new Set());
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 group transition-all text-sm ${
                        selectedTable === table.name 
                          ? 'bg-[#009E49] text-white shadow-sm' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className={selectedTable === table.name ? 'text-white' : 'text-[#009E49]'}>
                        <IconComp />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{table.name}</div>
                        <div className={`text-xs ${selectedTable === table.name ? 'text-green-100' : 'text-gray-500'}`}>
                          {table.rows} rows
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1">
                {tables.map((table) => {
                  const IconComp = Icons[table.icon as keyof typeof Icons];
                  return (
                    <button 
                      key={table.name}
                      onClick={() => {
                        setSelectedTable(table.name);
                        setSelectedRows(new Set());
                      }}
                      className={`w-10 h-10 rounded-md flex items-center justify-center transition-all ${
                        selectedTable === table.name 
                          ? 'bg-[#009E49] text-white shadow-sm' 
                          : 'text-[#009E49] hover:bg-gray-100'
                      }`}
                      title={table.label}
                    >
                      <IconComp />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Main Table Editor Panel */}
        <div className="flex-1 flex flex-col overflow-hidden bg-white">
          {/* Toolbar */}
          <div className="border-b border-gray-200 bg-white">
            {/* Top Tabs */}
            <div className="flex items-center px-4 pt-3 gap-3 border-b border-gray-200">
              <button 
                onClick={() => setActiveTab("data")}
                className={`pb-3 px-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "data" 
                    ? 'border-[#009E49] text-[#009E49]' 
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Data
              </button>
              <button 
                onClick={() => setActiveTab("definition")}
                className={`pb-3 px-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "definition" 
                    ? 'border-[#009E49] text-[#009E49]' 
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Definition
              </button>
            </div>
            
            {/* Action Bar */}
            {activeTab === "data" && (
              <div className="flex flex-wrap items-center justify-between px-4 py-2.5 gap-2">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded border border-gray-300 transition-colors">
                    <Icons.Filter />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded border border-gray-300 transition-colors">
                    Sort
                  </button>
                  <button 
                    onClick={() => setIsAddingRow(true)}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-white bg-[#009E49] hover:bg-[#007A38] rounded transition-colors font-medium"
                  >
                    <Icons.Plus />
                    Insert
                  </button>
                  {selectedRows.size > 0 && (
                    <button 
                      onClick={handleDeleteSelected}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded border border-red-300 transition-colors"
                    >
                      <Icons.Trash />
                      Delete {selectedRows.size}
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#009E49] focus:border-transparent"
                    />
                    <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <Icons.Search />
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedRows(new Set());
                    }}
                    className="p-1.5 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                  >
                    <Icons.Refresh />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Table Content */}
          {activeTab === "data" && (
            <div className="flex-1 overflow-auto">
              {isAddingRow && (
                <div className="border-b-2 border-[#F4C400] bg-yellow-50">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-3 py-2 border-r border-gray-200 w-10">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={handleAddRow}
                              className="text-[#009E49] hover:text-[#007A38] p-1"
                              title="Save"
                            >
                              ✓
                            </button>
                            <button
                              onClick={() => {
                                setIsAddingRow(false);
                                setNewRowData({});
                              }}
                              className="text-red-600 hover:text-red-700 p-1"
                              title="Cancel"
                            >
                              ✕
                            </button>
                          </div>
                        </td>
                        {columns.map((col) => (
                          <td key={col} className="px-3 py-2 border-r border-gray-200 min-w-[150px]">
                            <input
                              type="text"
                              value={newRowData[col] || ''}
                              onChange={(e) => setNewRowData({...newRowData, [col]: e.target.value})}
                              placeholder={col}
                              className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#009E49]"
                            />
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              
              <table className="w-full border-collapse">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th className="px-3 py-2 border-r border-b border-gray-200 w-10 bg-gray-50">
                      <input
                        type="checkbox"
                        checked={selectedRows.size === currentTableData.length && currentTableData.length > 0}
                        onChange={toggleSelectAll}
                        className="rounded border-gray-300 text-[#009E49] focus:ring-[#009E49]"
                      />
                    </th>
                    {columns.map((col) => (
                      <th key={col} className="text-left text-xs font-semibold text-gray-700 px-3 py-2 border-r border-b border-gray-200 bg-gray-50 min-w-[150px]">
                        {col}
                      </th>
                    ))}
                    <th className="px-3 py-2 border-b border-gray-200 bg-gray-50 w-20"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row: any) => (
                    <tr key={row.id} className="hover:bg-gray-50 group">
                      <td className="px-3 py-2 border-r border-b border-gray-200">
                        <input
                          type="checkbox"
                          checked={selectedRows.has(row.id)}
                          onChange={() => toggleRowSelection(row.id)}
                          className="rounded border-gray-300 text-[#009E49] focus:ring-[#009E49]"
                        />
                      </td>
                      {columns.map((col) => (
                        <td 
                          key={col} 
                          className="px-3 py-2 border-r border-b border-gray-200 min-w-[150px]"
                          onDoubleClick={() => {
                            setEditingCell({ rowId: row.id, field: col });
                            setEditValue(row[col]);
                          }}
                        >
                          {editingCell?.rowId === row.id && editingCell?.field === col ? (
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleCellEdit(row.id, col, editValue)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  handleCellEdit(row.id, col, editValue);
                                } else if (e.key === 'Escape') {
                                  setEditingCell(null);
                                }
                              }}
                              autoFocus
                              className="w-full px-2 py-1 text-sm border border-[#009E49] rounded focus:outline-none focus:ring-1 focus:ring-[#009E49]"
                            />
                          ) : (
                            <div className="text-sm text-gray-900 truncate">
                              {col === 'status' ? (
                                <span className={`px-2 py-0.5 rounded-full text-xs ${
                                  row[col]?.toLowerCase() === 'active' ? 'bg-green-100 text-green-700' :
                                  row[col]?.toLowerCase() === 'paid' ? 'bg-blue-100 text-blue-700' :
                                  row[col]?.toLowerCase() === 'approved' ? 'bg-green-100 text-green-700' :
                                  row[col]?.toLowerCase() === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                                  row[col]?.toLowerCase() === 'pending' ? 'bg-orange-100 text-orange-700' :
                                  'bg-gray-100 text-gray-700'
                                }`}>
                                  {row[col]}
                                </span>
                              ) : (
                                row[col] || <span className="text-gray-400">NULL</span>
                              )}
                            </div>
                          )}
                        </td>
                      ))}
                      <td className="px-2 py-2 border-b border-gray-200">
                        <button
                          onClick={() => handleDeleteRow(row.id)}
                          className="opacity-0 group-hover:opacity-100 p-1.5 text-red-600 hover:bg-red-50 rounded transition-all"
                          title="Delete row"
                        >
                          <Icons.Trash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredData.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-gray-500">
                  <div className="text-5xl mb-4">📊</div>
                  <p className="text-sm">No records found</p>
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm("")}
                      className="mt-2 text-sm text-[#009E49] hover:underline"
                    >
                      Clear search
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Definition Tab */}
          {activeTab === "definition" && (
            <div className="flex-1 overflow-auto p-6">
              <div className="max-w-5xl mx-auto">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Table: {selectedTable}</h3>
                  <p className="text-sm text-gray-600">Schema definition and column information</p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left text-xs font-semibold text-gray-700 px-4 py-3 border-b">Column</th>
                        <th className="text-left text-xs font-semibold text-gray-700 px-4 py-3 border-b">Type</th>
                        <th className="text-left text-xs font-semibold text-gray-700 px-4 py-3 border-b">Default</th>
                      </tr>
                    </thead>
                    <tbody>
                      {columns.map((col, idx) => (
                        <tr key={col} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900 border-b">{col}</td>
                          <td className="px-4 py-3 text-sm text-gray-600 border-b">
                            <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">
                              {col.includes('date') ? 'date' : col.includes('amount') || col.includes('premium') ? 'numeric' : col.includes('email') ? 'varchar(255)' : 'text'}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500 border-b">NULL</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Footer with pagination */}
          <div className="border-t border-gray-200 bg-gray-50 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="text-gray-600">
              Page <span className="font-semibold">1</span> of <span className="font-semibold">1</span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">{filteredData.length}</span> rows {searchTerm && `(filtered from ${currentTableData.length})`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}