import React from 'react';
import 'bulma/css/bulma.min.css';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { Employee } from '../../../types/employee';
import { employees } from '../../../utils/mockData';


const statusClass: Record<Employee['status'], string> = {
    Permanent: 'is-success',
    Probation: 'is-info',
    Internship: 'is-danger',
};

const AllEmployees: React.FC = () => {
    return (
        <section className="section">
            <div className="container">

                <div className="level mb-5">
                    <div className="level-left">
                        <h1 className="title">All Employees</h1>
                    </div>
                    <div className="level-right">
                        <button className="button is-link mr-2">Add New Employee</button>
                        <button className="button is-light">Filter</button>
                    </div>
                </div>

                <div className="field is-grouped mb-4">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Search Employee" />
                        <span className="icon is-left">
                            <i className="fas fa-search"></i>
                        </span>
                    </p>

                    <div className="control">
                        <input className="input" type="date" />
                    </div>
                    <div className="control">
                        <input className="input" type="date" />
                    </div>
                </div>

        <table className="table is-fullwidth is-striped is-hoverable">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>
                  <div className="is-flex is-align-items-center">
                    <figure className="image is-32x32 mr-2">
                      <img className="is-rounded" src={emp.avatar} alt={`${emp.name} avatar`} />
                    </figure>
                    {emp.name}
                  </div>
                </td>
                <td>{emp.id}</td>
                <td>{emp.dept}</td>
                <td>{emp.designation}</td>
                <td>{emp.type}</td>
                <td>
                  <span className={`tag ${statusClass[emp.status]}`}>{emp.status}</span>
                </td>
                <td className="icons">
                  <Eye className="mr-2 has-text-grey" />
                                    <Edit className="mr-2 has-text-success" />
                                    <Trash2 className="has-text-danger" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

            </div>
        </section>
    );
};

export default AllEmployees;
