import { Link } from "react-router-dom";

export default function Header(){

    return (
        <div className="header">
            <h1>
                <Link to="/">테스트 CRUD(고급)</Link>
            </h1>
            <div className="menu">
                <Link to="/createWord" className="link">Word 추가</Link>
                <a href="/CreateDay" className="link">Day 추가</a>
            </div>
        </div>
    );


}