var picHolder = document.getElementById("picHolder");
        var picContainer = document.getElementById("picContainer")

        picContainer.addEventListener('mouseover', function(event) {
            var target = event.target;
            console.log(target.tagName);
            if (target.tagName != "IMG")
                picHolder.style.display = 'none';
            else {
                picHolder.style.backgroundImage = "url(" + target.src + ")";
                picHolder.style.display = 'block';
            }

        });
        picContainer.addEventListener('mouseout', function() {
            picHolder.style.display = 'none';
        });