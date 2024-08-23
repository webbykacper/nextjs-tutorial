export default function DashboardLayout({ children, users, revenue, notifications }) {
    const box_1_style = {
        display: "flex"
    }

    const box_2_style = {
        display: "flex",
        flexDirection: "column"
    }

    const box_3_style = {
        display: "flex",
        flex: 1
    }

    return (
        <div>
            <div> {children} </div>
            <div style={box_1_style}> 
                <div style={box_2_style}>
                    <div> {users} </div>
                    <div> {revenue} </div>
                </div>
                <div style={box_3_style}> {notifications} </div>
            </div>
        </div>
    )
}