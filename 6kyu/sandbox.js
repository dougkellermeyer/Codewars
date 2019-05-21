function firstNonRepeatingLetter(s) {
    if(s.length <= 1 || s.length === 0){
        return s
    } else {
    
        let sMap = function(){
            this.collection = {};
            this.count = 0;
            this.size = function(){
                return this.count;
            };
            this.set = function(key, value){
                this.collection[key] = value;
                this.count++
            }
            this.values = function() {
                let result = new Array();
                for (let key of Object.keys(this.collection)) {
                    result.push(this.collection[key]);
                };
                return (result.length > 0) ? result : null;
            };
        }
    }
}

firstNonRepeatingLetter('aaa')