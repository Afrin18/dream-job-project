import { getJobCart } from "../utilities/fakeDb";

const cartJobsLoader = async () => {
    const loadedJobs = await fetch('feature.json');
    const jobs = await loadedJobs.json();

    // if cart data is in database, you have to use async await
    const storedCart = getJobCart();
    const savedCart = [];

    for(const id in storedCart){
        const addedJob = jobs.find(job => job.id === id);
        if(addedJob){
            const quantity = storedCart[id];
            addedJob.quantity = quantity;
            savedCart.push(addedJob);
        }
    }

    return savedCart;
}
export default cartJobsLoader;