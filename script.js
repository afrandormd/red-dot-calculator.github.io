// function kalkulasi
function calculate(){
    // ambil nilai
    event.preventDefault()
    const result = document.getElementById("result")
    let euro_per_gold = parseFloat(document.getElementById("euro_per_gold").value)
    let euro_old = parseFloat(document.getElementById("euro_old").value)
    let gold_old = parseFloat(document.getElementById("gold_old").value)
    let euro_update = parseFloat(document.getElementById("euro_update").value)
    let gold_update = parseFloat(document.getElementById("gold_update").value)
    // kalkulasikan
    let wf_result = ((euro_update - euro_old)/2 * euro_per_gold) + ((gold_update - gold_old) / 2)
    result.innerHTML = wf_result
}


