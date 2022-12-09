import CompB from './CompB'
let CompA = () => {

    let eid = 102011;
    let ename = "Roman";
    // let avail = true;


    return <div>
        <h2> Component A</h2>
        <hr />
        <CompB id={eid} name={ename} />
    </div>
}

export default CompA