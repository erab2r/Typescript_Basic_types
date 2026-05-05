"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUserRole = (role) => {
    if (role === 'admin') {
        return 'Admin Dashboard';
    }
    else if (role === 'editor') {
        return 'Editor Dashboard';
    }
    else {
        return 'Viewer Dashboard';
    }
};
getUserRole('admin'); // Output: Admin Dashboard
const employeeManager = {
    id: "123",
    name: "John Doe",
    phone: "1234567890",
    designation: "Project Manager",
    teamSize: "10"
};
//# sourceMappingURL=unionAndIntersection.js.map