@extends('app')

@section('content')
    <main class="flex-grow">
        <div class="max-w-3xl mx-auto px-4 sm:px-6">
            <div class="text-center pt-32 pb-24">
                <h1 class="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate">
                    Sign with any of the following methods
                </h1>
            </div>
        </div>


        <div class="max-w-4xl mx-auto px-4 sm:px-6">
            <div class="mb-6 text-center">
                <div class="form-floating"><select id="countrySelect" class="form-select">
                        <option value="EE">Estonia</option>
                        <option value="LV">Latvia</option>
                        <option value="LT">Lithuania</option>
                        <option value="FI">Finland</option>
                        <option value="AX">Åland Islands</option>
                        <option value="PT">Portugal</option>
                        <option value="BE">Belgium</option>
                        <option value="FR">France</option>
                        <option value="RO">Romania</option>
                        <option value="AL">Albania</option>
                        <option value="AD">Andorra</option>
                        <option value="AM">Armenia</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BY">Belarus</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BG">Bulgaria</option>
                        <option value="CA">Canada</option>
                        <option value="HR">Croatia</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GR">Greece</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="IL">Israel</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="XK">Kosovo</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MT">Malta</option>
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="ME">Montenegro</option>
                        <option value="NL">Netherlands</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NO">Norway</option>
                        <option value="MK">North Macedonia, Republic of</option>
                        <option value="PL">Poland</option>
                        <option value="RU">Russian Federation</option>
                        <option value="SM">San Marino</option>
                        <option value="RS">Serbia</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TR">Turkey</option>
                        <option value="UA">Ukraine</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States of America</option>
                        <option value="VA">Holy See (Vatican City State)</option>
                        <option value="WORLD">All World</option>
                        <option value="ZA">South Africa</option>
                        <option value="GG">Guernsey</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="BR">Brazil</option>
                        <option value="CL">Chile</option>
                        <option value="ID">Indonesia</option>
                        <option value="PH">Philippines</option>
                        <option value="SG">Singapore</option>
                        <option value="JP">Japan</option>
                        <option value="KR">South Korea</option>
                        <option value="CN">China</option>
                        <option value="IN">India</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="QA">Qatar</option>
                        <option value="GL">Greenland</option>
                        <option value="AF">Afghanistan</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AW">Aruba</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="IO">British Indian Ocean Territory</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo, the Democratic Republic of the</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Cote D'Ivoire</option>
                        <option value="CU">Cuba</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="ER">Eritrea</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">Heard Island and McDonald Islands</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="IR">Iran, Islamic Republic of</option>
                        <option value="IQ">Iraq</option>
                        <option value="IM">Isle of Man</option>
                        <option value="JM">Jamaica</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KI">Kiribati</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Lao People's Democratic Republic</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="MO">Macao</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="FM">Micronesia, Federated States of</option>
                        <option value="MN">Mongolia</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="KP">North Korea</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">State of Palestine</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RE">Reunion</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barthélemy</option>
                        <option value="SH">Saint Helena</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin (French part)</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">Saint Vincent and the Grenadines</option>
                        <option value="WS">Samoa</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SN">Senegal</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                        <option value="SS">South Sudan</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SZ">Eswatini</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UM">United States Minor Outlying Islands</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.S.</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                    </select></div>
            </div>

            <div class="text-center pb-48 flex flex-wrap justify-center">
                @foreach ($availableMethods as $method)
                    <div class="mx-2 my-2">
                        @include('method-button', ['text' => $method, 'docId' => $docId])
                    </div>
                @endforeach
            </div>
        </div>

        <script src="{{ mix('js/EidEasy.js') }}"></script>
        <script>
          const docId = {!! json_encode($docId) !!};
          const clientId = {!! json_encode($clientId) !!};
          const apiUrl = {!! json_encode($apiUrl) !!};
          const buttons = Array.from(document.querySelectorAll('[data-action-type]'));
          const eideasy = new window.EidEasy(
            apiUrl,
            (response) => {
              console.log('SUCCESS logged in sign.blade.php :')
              console.log(response);
              alert('SUCCESS, SIGNATURE DONE');
            },
            (error) => {
              console.log('ERROR logged in sign.blade.php :')
              console.log(error);
            },
          );

          buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
              e.preventDefault();
              const actionType = button.dataset.actionType;
              const country = document.getElementById('countrySelect').value;
              eideasy.start({
                clientId,
                docId,
                actionType,
                country,
              });
            });
          });

        </script>

    </main>
@endsection
