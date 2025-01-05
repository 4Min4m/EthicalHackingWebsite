import React from 'react';
import { AlertTriangle, Shield, Activity, BarChart } from 'lucide-react';

export function Incidents() {
  const incidents = [
    {
      id: "INC-001",
      title: "SQL Injection Attempt Detected",
      severity: "high",
      status: "investigating",
      reportedBy: "SecurityAnalyst",
      date: "2024-01-15"
    },
    {
      id: "INC-002",
      title: "Suspicious Login Activity",
      severity: "medium",
      status: "open",
      reportedBy: "SystemMonitor",
      date: "2024-01-14"
    },
    {
      id: "INC-003",
      title: "DDoS Attack Prevention",
      severity: "critical",
      status: "resolved",
      reportedBy: "NetworkAdmin",
      date: "2024-01-13"
    }
  ];

  const getSeverityColor = (severity: string) => {
    const colors = {
      low: "bg-blue-100 text-blue-800",
      medium: "bg-yellow-100 text-yellow-800",
      high: "bg-orange-100 text-orange-800",
      critical: "bg-red-100 text-red-800"
    };
    return colors[severity as keyof typeof colors] || colors.medium;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      open: "bg-gray-100 text-gray-800",
      investigating: "bg-purple-100 text-purple-800",
      resolved: "bg-green-100 text-green-800"
    };
    return colors[status as keyof typeof colors] || colors.open;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#0b2b26]">Security Incidents</h1>
        <button className="bg-[#051f20] text-white px-4 py-2 rounded-md hover:bg-[#0b2b26]">
          Report New Incident
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">24</p>
              <p className="text-sm text-[#153832]">Active Incidents</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">156</p>
              <p className="text-sm text-[#153832]">Resolved This Month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Activity className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">89%</p>
              <p className="text-sm text-[#153832]">Resolution Rate</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <BarChart className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">4.2h</p>
              <p className="text-sm text-[#153832]">Avg. Response Time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#0b2b26]">Recent Incidents</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {incidents.map((incident) => (
            <div key={incident.id} className="p-4 hover:bg-[#daf1df] transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-[#153832]">{incident.id}</span>
                    <h3 className="text-lg font-medium text-[#0b2b26]">{incident.title}</h3>
                  </div>
                  <p className="text-sm text-[#153832] mt-1">
                    Reported by {incident.reportedBy} on {incident.date}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                    {incident.severity}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                    {incident.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}