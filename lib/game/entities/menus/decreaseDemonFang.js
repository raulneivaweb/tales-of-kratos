ig.module(
	'game.entities.menus.decreaseDemonFang'
)
.requires(
	'game.entities.abstractions.decreaseSkill'
)
.defines(function(){
	ig.global.EntityDecreaseDemonFang = ig.global.EntityDecreaseSkill.extend({

	   	update: function(){
			if(ig.game.artesCatalog['demonFang'].points > 0){
	    		this.currentAnim = this.anims.idle;
	    	} else {
	    		this.currentAnim = this.anims.fade;
	    	}
	    },

	   	clicked: function() {
	        /* Handle the click */
	        console.log("Clicked minus");
	        if(ig.game.artesCatalog['demonFang'].points > 0){
		        ig.game.artesCatalog['demonFang'].level -= 1;
		        ig.game.player.skillPoints += 1; 
		        ig.game.artesCatalog['demonFang'].points -= 1;
		    }
		   
	    },
	});
});