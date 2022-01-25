const router = require("express").Router();
const verifyToken =  require("../routs/verifyToken");
const Listing = require("../model/Listing");

// Add lisiting router create
router.post("/", verifyToken, async (req, res)=>{
   
    try {
        const listing = new Listing({
            title: req.body.title,
            price: req.body.price,
            locality: req.body.locality,
            details: req.body.details
        });
        
        const saveListing = await listing.save();  // methoda for save data
        res.status(201).json(saveListing);
        
        
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})


// All lisiting router create
router.get("/",  async (req, res)=>{
    // res.send("All listing");

    try {
        const listings = await Listing.find();
        res.json(listings);
    } catch (error) {
        res.json({ message: error});
    }
})

// single listing
router.get("/:listingId", async (req, res)=>{
    // res.send("Single listing");
    try {
        const listing = await Listing.findById(req.params.listingId);
        res.json(listing);
    } catch (error) {
        res.json({ message: error});
    }
})

// Update listing
router.put("/:listingId", verifyToken, async (req, res)=>{
    // res.send("Update listing");

    try {
        const lisiting = {
            title: req.body.title,
            price: req.body.price,
            locality: req.body.locality,
            details: req.body.details
        };

        const UpdateLisiting = await Listing.findByIdAndUpdate(
            {_id: req.params.listingId},
            lisiting
            );
            res.json(UpdateLisiting);
    } catch (error) {
        res.json({ message: error});
    }
})

// Delete listing
router.delete("/:listingId", verifyToken, async (req, res)=>{
    // res.send("Delete  listing");

    try {
        const removeListing = await Listing.findByIdAndDelete(req.params.listingId);
        res.json(removeListing);
      } catch (error) {
        res.json({ message: error });
      }

});
module.exports = router;