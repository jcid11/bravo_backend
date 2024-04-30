import products from "../../mock_json/response.json" assert{type:"json"};

const getProducts = async (req , res) => {
    // default value for page and limit 1:10
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit ) : 10;
    const records = [...products.data.list]; 
  
    // Pagination logic
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
  
    // Slice records array based on pagination parameters
    const paginatedRecords = records.slice(startIndex, endIndex);
  
    res.status(200).json({
        success:true,
        data:{
        totalItems: records.length,
        currentPage: page,
        totalPages: Math.ceil(records.length / limit),
        records: paginatedRecords, 
        },
    });
  };
  
  const getProductByID = async (req, res) => {
    const param = Number(req.params.id);
    const records = [...products.data.list]; 
    
    const data = records.find((item) => item.idArticulo === param);
    if (data === undefined) {
      res.status(404).json({ msg: "not found" });
    } else {
        console.log(data);
      res.status(200).json({success:true,data:data});
    }
  };

  export default{
    getProducts,
    getProductByID
  }