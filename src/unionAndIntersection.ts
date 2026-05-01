type userRole = 'admin' | 'editor' | 'viewer';

const getUserRole = (role: userRole): string => {
    if (role === 'admin') {
        return 'Admin Dashboard';
    } else if (role === 'editor') {
        return 'Editor Dashboard';
    } else {
        return 'Viewer Dashboard';
    }
};
getUserRole('admin'); // Output: Admin Dashboard

//intersection

type Employee = {
    id:string;
    name: string;
    phone: string;
}
type Manager = {
    designation:string;
    teamSize: string;
}
type EmployeeManager = Employee & Manager;

const employeeManager: EmployeeManager = {
    id: "123",
    name: "John Doe",
    phone: "1234567890",
    designation: "Project Manager",
    teamSize: "10"
}