au BufRead,BufNewFile *.jq set filetype=jq 

au InsertLeave *.jq call JQfilter()
