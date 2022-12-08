import CompB from './CompB'
let CompA = () => {

    let eid = 101;
    let ename = "Rahul Gandhi";
    let avail = true;


    return <div>
        <h2> Component A</h2>
        <hr />
        <CompB id={eid} name={ename} />
    </div>
}

export default CompA