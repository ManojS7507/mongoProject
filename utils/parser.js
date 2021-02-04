export const ComparisonParser = (req) => {
  let newQuery = {};
  for (let key in req.query) {
    if (req.query[key].includes("gt")) {
      newQuery[key] = { $gt: req.query[key].replace("gt", "") };
    } else if (req.query[key].includes("eb")) {
      newQuery[key] = { $lt: req.query[key].replace("eb", "") };
    } else if (req.query[key].includes("lt")) {
      newQuery[key] = { $lt: req.query[key].replace("lt", "") };
    } else if (req.query[key].includes("eb")) {
      newQuery[key] = { $lt: req.query[key].replace("eb", "") };
    } else if (req.query[key].includes("eq")) {
      newQuery[key] = { $eq: req.query[key].replace("eq", "") };
    } else if (req.query[key].includes("ap")) {
      newQuery[key] = { $eq: req.query[key].replace("ap", "") };
    } else if (req.query[key].includes("ne")) {
      newQuery[key] = { $ne: req.query[key].replace("ne", "") };
    } else if (req.query[key].includes("ge")) {
      newQuery[key] = { $gte: req.query[key].replace("ge", "") };
    } else if (req.query[key].includes("le")) {
      newQuery[key] = { $lte: req.query[key].replace("le", "") };
    } else {
      newQuery[key] = req.query[key];
    }
  }
  return newQuery;
};


// export const textComparisionParser = (req) =>{
//     let newQuery = {}
//     for(let key in req.query){
//         if(req.query[key].includes("given")){
//             newQuery[key] = {  "$subject" : req.query[key].replace(/[^0-9]/g, '') };
//         }
//     }
//    return newQuery
// }
