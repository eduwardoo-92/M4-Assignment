/* Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
####### */

let rows = 6

for (let i = 0; i < rows ; i++){
    let row = "";
    for ( let h = 0; h <= i; h++) {
       row += "#"
    }
    console.log(row)
}