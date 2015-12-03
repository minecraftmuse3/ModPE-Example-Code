ModPE.setItem(500, "Example Item", "stick", 0, 64);

function useItem(x, y, z, itemId, blockId, side, blockDamage, itemDamage){
  clientMessage("You tapped a block with the example item!");
}

function destroyBlock(x, y, z, side){
  clientMessage("You mined a block with a stick!");
}

function attackHook(a, v){
  if(Player.getCarriedItem(a) = 500){
    clientMessage(You hit a mob with the example item");
                  }
                  }