var recipes = { breakfast: 'toast' }

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key){
  var newObject = delete object.key
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  //var newObject = {}
 // var newObject = delete object.key
  delete object.key
  return object
  //return newObject
}