import '../_styles/style.css'
import Notifications from './@notifications/page'
import Revenue from './@revenue/page'
import Users from './@users/page'

export default function DashboardLayout({ children, notifications, revenue, users }) {
    return (
        <>
            <div> {children} </div>
            <div className="box-1">
                <div className="box-2">
                    <div> {users} </div>
                    <div> {revenue} </div>
                </div>
                <div className="box-3"> {notifications} </div>
            </div>
        </>
    )
} 