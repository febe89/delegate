let generateForm = () => {
  let data = []
  let total = []

  let repeat = (document.getElementById('repeat').innerHTML = ' ')
  let delegate = document.getElementById('delegate').value
  for (let i = 1; i <= delegate; i++) {
    document.getElementById('repeat').innerHTML += `
    <h2>DELEGATE - REGISTRATION DETAILS - ${i}</h2>
    <h3 style="font-size: 20px;">Please enter the details of the delegate that you wish to register</h3>
        <div class="fields">
    
            <div class="input-field">
                <label class="DSalutation" for="Salutations">Salutation</label>
                <select name="salute" id="salute${i}" value="">
                <option value="select">Please Select...</option>
                    <option value="Mr">Mr</option>
                    <option value="Dr">Dr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Er">Er</option>
                </select>
            </div>
    
        <div class="input-field">
                <label for="dfname">Delegate First name:</label>
                <input type="text" id="dfname${i}" value="" name="dfname" placeholder="Delegate First Name" required>
        </div>
    
        <div class="input-field">
            <label for="dlname">Delegate Last name:</label>
            <input type="text" id="dlname${i}" name="dlname" placeholder="Delegate Last Name" required>
        </div>
    
        <div class="input-field">
            <label for="demail">Delegate Email:</label>
            <input type="email" id="demail${i}" name="demail" placeholder="Enter Email" required>
        </div>
    
        <div class="input-field">
            <label for="dtelephone">Delegate Telephone:</label>
            <input type="Number" id="dtelephone${i}" name="dtelephone" placeholder="Enter Telephone number" required>
        </div>
    
        <div class="input-field">
            <label for="djob">Delegate Job Title:</label>
            <input type="text" id="djob${i}" name="djob" placeholder="Enter Job Title" required>
        </div>
    
        <div class="input-field">
            <label for="dpass">Delegate Passport Number :</label>
            <input type="text" id="dpass${i}" name="dpass" placeholder="Enter your Passport Number" required>
        </div>
        </div>
    <div class="product">
        <h2>PRODUCT AND FEES</h2>
        <table style="width:100%">
    <tr>
    <td>
        <input name="productandfees" type="checkbox" value="5900" id="myCheck1-">
        <label for="productandfees">All Access (Delegate)</label>
    </td>
    <td>
        USD 5900
    </td>
    </tr>
    <tr>
    <td>
    <input name="productandfees" type="checkbox" value="5100" id="myCheck2-">
    <label for="productandfees">Strategic Conference (Delegate)</label>
    </td>
    <td>
    USD 5100
    </td>
    </tr>
    <tr>
    <td>
    <input name="productandfees" type="checkbox" value="1858" id="myCheck3-">
    <label for="productandfees">Technical Conference Pass - 4 days (Delegate)</label>
    </td>
    <td>
    USD 1858
    </td>
    </tr>
    <tr>
    <td>
    <input name="productandfees" type="checkbox" value="1485" id="myCheck4-" placeholder="">
    <label for="productandfees">Technical Conference Pass - 2 days (Delegate)</label>
    </td>
    <td>
    USD 1485
    </td>
    </tr>
    <tr>
    <td>
    <input name="productandfees" type="checkbox" value="1100" id="myCheck5-">
        <label for="productandfees">Downstream Technical Conference Pass (Delegate)</label>
        </td>
    <td>
    USD 1100
    </td>
    </tr>
    </table>
    </div>
    `
  }
  document.getElementById('repeat').innerHTML += `
  <input class="btn" type="button" id='total' value="Show Grand Total" />
  <input class="btn" type="button" id='next' value="Next" />
  <input class="btn" type="button" id="submit" value="Submit" />
  `
  document.getElementById('total').addEventListener('click', () => {
    let products = document.querySelectorAll("input[name='productandfees']")

    products.forEach((product) => {
      if (!product.checked) {
        return product
      } else {
        total.push(Number(product.value))
      }
    })
    let delegate = document.getElementById('delegate').value
    for (let j = 1; j <= delegate; j++) {
      let salute = document.getElementById('salute' + j).value
      let dfname = document.getElementById('dfname' + j).value
      let dlname = document.getElementById('dlname' + j).value
      let dtelephone = document.getElementById('dtelephone' + j).value
      let djob = document.getElementById('djob' + j).value
      let demail = document.getElementById('demail' + j).value
      let dpass = document.getElementById('dpass' + j).value
      let createObj = {
        total,
        salute,
        dfname,
        dlname,
        dt:Number(dtelephone)
        ,djob,
        demail,
        dpass
      }
      data.push(createObj)
    }

    // products.forEach((product) => product.addEventListener('click',()=>console.log(product.value)))
    document.getElementById('next').remove()
    document.getElementById('submit').remove()
    document.getElementById('repeat').innerHTML += `
    <div id="Container">
<h2>PURCHASE SUMMARY</h2>
<table>
    <tr>
        <td>
            Total :
        </td>
        <td>
            (USD)
        </td>
        <td id="grandtotal">
        </td>
    </tr>
</table>
</div>

    `
    let totalx = document.getElementById('grandtotal')

    let allTotal = total.reduce((prev, next) => prev + next, 0)
    totalx.innerText = allTotal

    document.getElementById('repeat').innerHTML += `
    <input class="btn" type="button" id='next' value="Next" />
    <input class="btn" type="button" id="submit" value="Submit" />
    
    `
    document.getElementById('next').addEventListener('click', () => {
      document.getElementById('submit').remove()
      document.getElementById('repeat').innerHTML += `
      <div id="Container1">
      <div class="maindiv">
      
          <h1>
              Company Information :
          </h1>
          <div class="fields">
      
              <div class="input-field">
                  <label> Company Name :</label>
      
                  <input class="textinput" type="text" id="company" name="fname" value="">
              </div>
              <div class="input-field">
                  <label> Street :</label>
      
                  <input type="text" id="comstr" name="fstreet" value="">
              </div>
              <div class="input-field">
                  <label> Town/City :</label>
      
                  <input type="text" id="town" name="town" value="">
              </div>
              <div class="input-field">
                  <label> Country :</label>
      
                  <input type="text" id="country" name="country" value="">
              </div>
              <div class="input-field">
                  <label> Zipcode :</label>
      
                  <input id="zip" name="zip" type="text" inputmode="numeric" value="">
              </div>
              <div class="input-field">
                  <label> State :</label>
      
                  <input type="text" id="state" name="state" value="">
              </div>
          </div>
      </div>
      
      
      <h1>
          Billing Contact Info :
      </h1>
      
      <div class="fields">
      
          <div class="input-field">
              <label class="DSalutation" for="Salutations">Salutation</label>
              <select name="salute" id="salute" value="">
                  <option value="">Please Select...</option>
                  <option value="Mr">Mr</option>
                  <option value="Dr">Dr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Er">Er</option>
              </select>
          </div>
      
          <div class="input-field">
              <label for="Cfname">First name:</label>
              <input type="text" id="Cfname" name="Cfname" placeholder="First Name" value="" required>
          </div>
      
          <div class="input-field">
              <label for="clname">Last name:</label>
              <input type="text" id="clname" name="clname" placeholder="Last Name" value="" required>
          </div>
      
          <div class="input-field">
              <label for="cemail">Email:</label>
              <input type="email" id="cemail" name="cemail" placeholder="Enter Email" value="" required>
          </div>
      
          <div class="input-field">
              <label for="ctelephone">Telephone:</label>
              <input type="phone" id="ctelephone" name="ctelephone" placeholder="Enter Telephone number"
                  value="" required>
          </div>
          <div class="input-field"></div>
      </div>
      <div>
          <label for="vat">VAT Registered</label><br>
          <input onclick="vatYes()" type="radio" id="vatyes" name="vat" value="Yes">
          <label for="vatyes">Yes</label>
          <input onclick=vatNo() type="radio" id="vatno" name="vat" value="No">
          <label for="vatyes">No</label>
      
          <div id="Container3">
          </div>
      
      </div>
      </div>
            
      `

      document.getElementById('repeat').innerHTML += `
      <input class="btn"  type="button" id="submit" value="Submit" />

      `

      document.getElementById('submit').addEventListener('click', () => {
        console.log(data)
        console.log(data.map((x) => console.log(x.dfname)))
        data.map((x, index) => {
          document.getElementById('data').innerHTML += `<table>
          <tbody ' class='dataTable btable'>
          <tr >
          <th>No of delegates ${index + 1} </th>
          </tr>
          <tr>
          <th>Salutation</th>
          <th>Delgate First Name</th>
          <th>Delgate Last Name</th>
          </tr>
          <tr>
          <td>select</td>
          <td>${x.dfname}</td>
          <td>${x.dlname}</td>
          </tr>
          <tr>
          <th>Delegate Email</th>
          <th>Delegate Telephone</th>
          <th>Delegate Job Title</th>
          </tr>
          <tr>
          <td>${x.demail}</td>
          <td>${x.dt}</td>
          <td>${x.djob}</td>
          </tr>
          <tr>
          <th>Delegate Passport Number</th>
          <th>Product And Fees</th>
          </tr>
          <tr>
          <td>${x.dpass}</td>
          <td colspan=2 ></td>
          </tr>

          </tbody>
            </table>
      
            `
        })
      })
    })
  })
}

let vatYes = () => {
  document.getElementById('Container3').innerHTML = `
  <div class="input-field">
  <input type="text" id="vatnum" name="vatnum" value="" placeholder="Vat Number">
</div>

  `
}
let vatNo = () => {
  document.getElementById('Container3').innerHTML = ``
}
