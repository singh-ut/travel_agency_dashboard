import { Header } from "components";

const Dashboard = () => {

    const user = {
        name: "Myname"
    };

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? 'Guest'} 👋`}
                description='Track activity, trends and popular destinations in real time'
            />

            Content
        </main>
    );
};

export default Dashboard;