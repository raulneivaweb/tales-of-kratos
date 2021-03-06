ig.module(
	'game.entities.projectiles.fiercedemonfang'
)
.requires(
	'impact.entity'
)

.defines(function(){
	EntityFierceDemonFang = ig.Entity.extend({
		/* Set up projectile properties */
		size: {x: 24, y: 24},
		offset: {x: 0, y: 0},
		animSheet: new ig.AnimationSheet('media/fiercedemonfang.png', 24, 24),
		maxVel: {x:100, y: 0},
		speed: 100,

		/* Set up collision properties */
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.B, 
		collides: ig.Entity.COLLIDES.PASSIVE,

		/* init method */
		init: function( x, y, settings ) {
			// Define animation frames
			this.addAnim('idle', 0.1, [0, 1, 2]); 
			// Read settings from parent object (player.js)
        	this.parent( x , y, settings );           
        	// Assign velocity based on flip property of player (stored in settings)
            this.vel.x = settings.flip ? -1*this.speed : 1*this.speed;
            // Flip projectile based on player's flip value
            this.currentAnim.flip.x = settings.flip;
        },

        /* check method for collisions */
        check: function( other ) {
            other.receiveDamage( 5, this );
            this.kill();
        },

        /* Kill projectile on collision on the x-axis */
        handleMovementTrace: function(res){
            this.parent(res);
            if(res.collision.x){
            	this.kill();
            }
        },

        collideWith: function(other, axis){
        	if(other instanceof EntityArcher){
        		console.log('Fierce Demon fang hit archer');
        		other.receiveDamage(5, this);
                this.kill();
        	} else if (other instanceof EntityStone){
                this.kill();
            } else {
                other.kill();
                this.kill();
            }
        },

	});
});