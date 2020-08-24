
    var check = function()
    {
        var form = document.createElement("form");
        var ddl = $("#ListItems").val();
        var searchString = $("#SearchString").val();
        if (ddl == "Name")
        {
            var matches = searchString.match(/\d+/g);
            if (matches != null) {
                alert("Search by name cannot contain numeric digits!");
                return false;
            }
            else form.submit();
        }
        return form.submit();
        
    }