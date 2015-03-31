'use strict';

describe('Given a cactus', function() {

	beforeEach(function() {
		this.cactus = new Cactus();
	});

	describe('Attempt to get cactus name without setting it', function() {
		it('should have no name', function() {
			expect(this.cactus.getName()).toBeUndefined();
		});
	});

	describe('Attempt to set cactus name to "Todd"', function() {

		beforeEach(function() {
			//this.cactus.setName('Todd');
			//spyOn(this.cactus, 'setName');
			this.cactus.setName('Todd');
		});

		it('should have name set to "Todd"', function() {
			//expect(this.cactus.setName).toHaveBeenCalled();
			expect(this.cactus.getName()).toBe('Todd');
		});
	});

	describe('Get default cactus type', function() {

		it('should have a default type set to "prickly"', function() {
			expect(this.cactus.getType()).toBe('prickly');
		});
	});

	describe('Set cactus type to "tall", "prickly" and "short"', function() {

		var type;

		afterEach(function() {
			this.cactus.setType(type);
			expect(this.cactus.getType()).toBe(type);
		});

		it('should be "short"', function() {
			type = 'short';
		});

		it('should be "tall"', function() {
			type = 'tall';
		});

		it('should be "prickly"', function() {
			type = 'prickly';
		});

		xit('should be "fat"', function() {
			type = 'fat';
		});

	});

	describe('Set cactus type to "smooth"', function() {

		it('should throw an exception', function() {
			try {
				this.cactus.setType('smooth');
			} catch(error) {
				expect(error).toBe('Invalid cactus type: "smooth"');
			}
		});
	});

});