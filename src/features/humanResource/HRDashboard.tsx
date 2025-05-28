import { useState } from "react";
import EmployeeDetails from "./invite-employees/component/employee-form";
import "./HumanResource.css"; 
import AllEmployees from "./employees/all-employees";

const HRDashboard: React.FC = () => {
    const [showAddEmployee, setShowAddEmployee] = useState(false);
    const [showManageEmployee, setShowManageEmployee] = useState(false);
    const leaveRequests = [
        {
            id: "EMP-00001",
            name: "Ahmad Butt",
            avatar: "https://i.pravatar.cc/30?img=1",
            type: "Casual Leave",
            from: "12/03/2024",
            to: "14/03/2024",
            reason: "Going to Hospital",
        },
        {
            id: "EMP-00002",
            name: "Ali Raza",
            avatar: "https://i.pravatar.cc/30?img=2",
            type: "Sick Leave",
            from: "12/03/2024",
            to: "14/03/2024",
            reason: "Fever",
        },
    ];

    const dailyStats = {
        earlyRisers: ["Ahmad Butt", "Usman", "Bilal"],
        lateArrivals: ["Khizar", "Moiz", "Usama"],
        missingPunch: [
            { name: "Khalifa", type: "Check-In" },
            { name: "Saad", type: "Check-Out" },
            { name: "Yonus", type: "Check-In" },
        ],
        birthdays: ["Ahmad Butt", "Ali", "Rameez"],
    };

    const handleAddEmployee = () => {
        setShowAddEmployee(true);
    };

    const handleManageEmployee = () => {
        setShowManageEmployee(true);
    }

    return (
        <div className="columns is-gapless" style={{ minHeight: "100vh" }}>
            {showAddEmployee ? (
                <div className="column is-10 p-5">
                    <EmployeeDetails />
                </div>
            ) : (
                showManageEmployee ? (
                    <div className="column is-10 p-5">
                    <AllEmployees />
                </div>
                ) : (

                <section className="section has-background-light">
                    <div className="container">
                        {/* Header */}
                        <div className="columns is-vcentered is-mobile">
                            <div className="column">
                                <h1 className="title is-4">
                                    <span className="has-text-link">Good Morning</span>, Waleed
                                </h1>
                                <p className="subtitle is-6 has-text-grey">
                                    Here’s what’s happening with the team today
                                </p>
                            </div>
                            <div className="column is-narrow">
                                <button className="button is-link" onClick={handleAddEmployee}>Add Employee</button>
                            </div>
                            <div className="column is-narrow">
                                <button className="button is-link" onClick={handleManageEmployee}>Manage Employee</button>
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="columns is-multiline">
                            {[
                                { label: "Attendance", value: 57, change: "▲ 2.5%", positive: true },
                                { label: "Late Arrivals", value: 23, change: "▼ 1.5%", positive: false },
                                { label: "Absent", value: 3, change: "▲ 2.5%", positive: true },
                                { label: "Leave Apply", value: 6, change: "▼ 1.5%", positive: false },
                            ].map((metric, i) => (
                                <div key={i} className="column is-one-fifth">
                                    <div className={`box ${i === 0 ? "has-border-left" : ""}`}>
                                        <p className="has-text-grey">{metric.label}</p>
                                        <p className="title is-4">{metric.value}</p>
                                        <span
                                            className={
                                                metric.positive ? "has-text-success" : "has-text-danger"
                                            }
                                        >
                                            {metric.change}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            <div className="column is-one-fifth">
                                <div className="box has-text-centered">
                                    <p className="has-text-grey">Total Employees</p>
                                    <div className="circle-chart mx-auto my-3">
                                        <span>57</span>
                                    </div>
                                    <div className="is-flex is-justify-content-center mt-2">
                                        <div className="mr-3">
                                            <span className="tag is-black is-rounded is-small"></span> Men
                                        </div>
                                        <div>
                                            <span className="tag is-link is-rounded is-small"></span> Women
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Leave Requests */}
                        <div className="box">
                            <h2 className="title is-5">Leave Request</h2>
                            <table className="table is-fullwidth is-striped is-hoverable is-size-7">
                                <thead>
                                    <tr>
                                        <th>EMPLOYEE ID</th>
                                        <th>EMPLOYEE NAME</th>
                                        <th>LEAVE TYPE</th>
                                        <th>FROM</th>
                                        <th>TO</th>
                                        <th>REASON</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaveRequests.map((r, i) => (
                                        <tr key={i}>
                                            <td>{r.id}</td>
                                            <td>
                                                <div className="is-flex is-align-items-center">
                                                    <img
                                                        src={r.avatar}
                                                        width="24"
                                                        height="24"
                                                        alt={r.name}
                                                        style={{ borderRadius: "50%", marginRight: "8px" }}
                                                    />
                                                    {r.name}
                                                </div>
                                            </td>
                                            <td>{r.type}</td>
                                            <td>{r.from}</td>
                                            <td>{r.to}</td>
                                            <td>{r.reason}</td>
                                            <td>
                                                <button className="button is-small is-success is-light mr-2">
                                                    ✔ Accept
                                                </button>
                                                <button className="button is-small is-danger is-light">
                                                    ✘ Reject
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Daily Stats */}
                        <div className="columns is-multiline">
                            {[
                                { title: "Early Risers", items: dailyStats.earlyRisers, type: "success" },
                                { title: "Late Arrivals", items: dailyStats.lateArrivals, type: "danger" },
                                {
                                    title: "Missing Punch",
                                    items: dailyStats.missingPunch.map(p => `${p.name} (${p.type})`),
                                    type: "danger",
                                },
                                {
                                    title: "Birthdays",
                                    items: dailyStats.birthdays,
                                    icon: "🎂",
                                    tagClass: "is-info",
                                },
                            ].map((stat, i) => (
                                <div key={i} className="column is-one-quarter">
                                    <div className="box">
                                        <p className="title is-6">{stat.title}</p>
                                        <p className="is-size-7 has-text-grey mb-2">04 Oct 2024</p>
                                        <ul>
                                            {stat.items.map((name, j) => (
                                                <li
                                                    key={j}
                                                    className="is-flex is-justify-content-space-between"
                                                >
                                                    <span>{name.split(" (")[0]}</span>
                                                    {stat.icon ? (
                                                        <span className={`tag ${stat.tagClass} is-light is-small`}>
                                                            {stat.icon}
                                                        </span>
                                                    ) : (
                                                        <span
                                                            className={`has-text-${stat.type === "success" ? "success" : "danger"
                                                                }`}
                                                        >
                                                            {name.split(" (")[1]?.replace(")", "") ?? "0m"}
                                                        </span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>

    )
}

export default HRDashboard;