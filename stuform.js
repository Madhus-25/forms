
function sub()
{
    var nam = document.getElementById("nam").value;
    var reg= document.getElementById("regno").value;
    var dob = document.getElementById("dob").value;
    var clas = document.getElementById("clas").value;
    var eng = document.getElementById("eng").value;
    var math = document.getElementById("math").value;
    var phy = document.getElementById("phy").value;
    var chem = document.getElementById("chem").value;
    var cs = document.getElementById("cs").value;

    var mark = [eng,math,phy,chem,cs];

    for(var i=0;i<5;i++)
    {
        if( (mark[i]<0) || (mark[i]>100) || (mark[i]==""))
        {
            var inv = `<span style="color:red;">Enter a valid mark</span>`
            document.getElementById ("invalid").innerHTML=inv;
        }
        else 
        {
            if(mark[i]>=40 && mark[i]<=100)
            {
                mark[i] = "Pass";
            }
            else
            {
                mark[i] = "Fail";
            }
        }
    }
    var total = parseInt(eng)+parseInt(math)+parseInt(phy)+parseInt(chem)+parseInt(cs);
    var cg = parseInt(eng/10)+parseInt(math/10)+parseInt(phy/10)+parseInt(chem/10)+parseInt(cs/10);

    if(eng>=0 && eng<=100 && eng && math>=0 && math<=100 && math && phy>=0 && phy<=100 && phy && chem>=0 && chem<=100 && chem && cs>=0 && cs<=100 && cs)
    {
        let tab = `<table>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>CGPA</th>
                <th>Pass/Fail</th>
            </tr>

            <tr>
                <td>English</td>
                <td>${eng}</td>
                <td>${eng/10}</td>
                <td>${mark[0]}</td>
            </tr>

            <tr>
                <td>Maths</td>
                <td>${math}</td>
                <td>${math/10}</td>
                <td>${mark[1]}</td>
            </tr>

            <tr>
                <td>Physics</td>
                <td>${phy}</td>
                <td>${phy/10}</td>
                <td>${mark[2]}</td>
            </tr>

            <tr>
                <td>Chemistry</td>
                <td>${chem}</td>
                <td>${chem/10}</td>
                <td>${mark[3]}</td>
            </tr>

            <tr>
                <td>CS</td>
                <td>${cs}</td>
                <td>${cs/10}</td>
                <td>${mark[4]}</td>
            </tr>

            <tr style="background-color: lightgray">
                <td>Total</td>
                <td>${total}/500</td>
                <td>${total/50}</td>
                <td></td>
            </tr>

        </table>`;
    
        document.getElementById("tab").innerHTML=tab;
    }

    document.getElementById("nameout").innerHTML=nam;
    document.getElementById("regout").innerHTML=reg;
    document.getElementById("dobout").innerHTML=dob;
    document.getElementById("clasout").innerHTML=clas;
}

function re()
{
    window.location.reload();
}