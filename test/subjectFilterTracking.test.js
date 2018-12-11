document.body.innerHTML =
`<ul class="available-filters" role="tablist" aria-multiselectable="true">
    <li id="heldby">
    </li>
    <li id="source">
    <h3><a href="#" class="filter-toggler" id="download-filters" role="tab">Download</a></h3>
<div class="filter-togglee" aria-labelledby="download-filters" role="tabpanel">
    <ul>
    <li><a href="/results/r?_q=%2A&amp;_col=200&amp;_hb=tna">Available for download only</a> <span class="filterNumber">(8,970,007)</span></li>
</ul>
</div>
</li>
<li id="dates">
    <form action="/results/r" method="get">
    <input name="_q" type="hidden" value="*" /><input name="_hb" type="hidden" value="tna" />
    <h3><a href="#" class="filter-toggler" id="date-filters" role="tab">Date</a></h3>
<div class="filter-togglee" aria-labelledby="date-filters" role="tabpanel">
    <ul>
    <li>
    <input type="checkbox" name="_p" value="0"
id="p_0" />
    <label for="p_0">
    Dates unknown
<span class="filterNumber">(323,968)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1950"
id="p_1950" />
    <label for="p_1950">
    1950+
    <span class="filterNumber">(4,725,910)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1925"
id="p_1925" />
    <label for="p_1925">
    1925 - 1949
    <span class="filterNumber">(4,289,228)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1900"
id="p_1900" />
    <label for="p_1900">
    1900 - 1924
    <span class="filterNumber">(9,529,108)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1800"
id="p_1800" />
    <label for="p_1800">
    1800 - 1899
    <span class="filterNumber">(4,480,764)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1700"
id="p_1700" />
    <label for="p_1700">
    1700 - 1799
    <span class="filterNumber">(1,592,148)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1600"
id="p_1600" />
    <label for="p_1600">
    1600 - 1699
    <span class="filterNumber">(1,260,579)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1500"
id="p_1500" />
    <label for="p_1500">
    1500 - 1599
    <span class="filterNumber">(480,257)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1400"
id="p_1400" />
    <label for="p_1400">
    1400 - 1499
    <span class="filterNumber">(124,126)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1300"
id="p_1300" />
    <label for="p_1300">
    1300 - 1399
    <span class="filterNumber">(139,135)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1200"
id="p_1200" />
    <label for="p_1200">
    1200 - 1299
    <span class="filterNumber">(42,376)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1100"
id="p_1100" />
    <label for="p_1100">
    1100 - 1199
    <span class="filterNumber">(1,947)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1000"
id="p_1000" />
    <label for="p_1000">
    1000 - 1099
    <span class="filterNumber">(24,304)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_p" value="1"
id="p_1" />
    <label for="p_1">
    1 - 999
    <span class="filterNumber">(3)</span>
    </label>
    </li>
    </ul>
    <input name="Refine dates" value="Refine" type="submit"
alt="Refine dates" title="Refine dates" />
    </div>
    </form>
    </li>
    <li id="department">
    <form action="/results/r" method="get">
    <input name="_q" type="hidden" value="*" /><input name="_hb" type="hidden" value="tna" />
    <h3><a href="#" class="filter-toggler" id="collection-filters" role="tab">Collection</a></h3>
<div class="filter-togglee" aria-labelledby="collection-filters" role="tabpanel">
    <ul>
    <li>
    <input type="checkbox" name="_d" value="WO" id="WO" />
    <label for="WO">
    WO - War Office, Armed Forces, Judge Advocate General, and related bodies
<span>(6,869,414)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="BT" id="BT" />
    <label for="BT">
    BT - Board of Trade and successors
<span>(2,465,365)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="ADM" id="ADM" />
    <label for="ADM">
    ADM - Admiralty, Navy, Royal Marines, and Coastguard
<span>(2,294,414)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="HO" id="HO" />
    <label for="HO">
    HO - Home Office
<span>(1,633,327)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="C" id="C" />
    <label for="C">
    C - Chancery, the Wardrobe, Royal Household, Exchequer and various commissions
<span>(1,450,750)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="PROB" id="PROB" />
    <label for="PROB">
    PROB - Prerogative Court of Canterbury
<span>(1,257,842)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="AIR" id="AIR" />
    <label for="AIR">
    AIR - Air Ministry and Royal Air Force records
<span>(698,782)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="FO" id="FO" />
    <label for="FO">
    FO - Foreign Office
<span>(678,409)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="E" id="E" />
    <label for="E">
    E - Exchequer, Office of First Fruits and Tenths, and the Court of Augmentations
<span>(392,482)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="IR" id="IR" />
    <label for="IR">
    IR - Boards of Stamps, Taxes, Excise, Stamps and Taxes, and Inland Revenue
<span>(370,772)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="CO" id="CO" />
    <label for="CO">
    CO - Colonial Office, Commonwealth and Foreign and Commonwealth Offices
<span>(340,628)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="OS" id="OS" />
    <label for="OS">
    OS - Ordnance Survey of Great Britain
<span>(278,072)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="T" id="T" />
    <label for="T">
    T - HM Treasury
<span>(267,719)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="J" id="J" />
    <label for="J">
    J - Supreme Court of Judicature
<span>(264,370)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="MH" id="MH" />
    <label for="MH">
    MH - Ministry of Health
<span>(239,576)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="ED" id="ED" />
    <label for="ED">
    ED - Department of Education and Science
<span>(230,802)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="FCO" id="FCO" />
    <label for="FCO">
    FCO - Foreign and Commonwealth Office and predecessors
<span>(208,867)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="SP" id="SP" />
    <label for="SP">
    SP - State Paper Office, including papers of the Secretaries of State up to 1782
<span>(188,289)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="MAF" id="MAF" />
    <label for="MAF">
    MAF - Agriculture, Fisheries and Food Departments
<span>(177,196)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="RG" id="RG" />
    <label for="RG">
    RG - General Register Office, Social Survey Department, and Office of Population Censuses and Surveys
<span>(168,917)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="MT" id="MT" />
    <label for="MT">
    MT - Ministries of Transport and related bodies
<span>(152,525)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="RAIL" id="RAIL" />
    <label for="RAIL">
    RAIL - Pre-nationalisation railway companies, pre-nationalisation canal and related companies
<span>(147,345)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="CAB" id="CAB" />
    <label for="CAB">
    CAB - Cabinet Office
<span>(132,908)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="COPY" id="COPY" />
    <label for="COPY">
    COPY - Copyright Office and Stationers&#39; Company
<span>(131,281)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="HLG" id="HLG" />
    <label for="HLG">
    HLG - Ministry of Housing and Local Government
<span>(125,987)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="COAL" id="COAL" />
    <label for="COAL">
    COAL - National Coal Board and predecessors, and related bodies
<span>(125,273)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="HCA" id="HCA" />
    <label for="HCA">
    HCA - High Court of Admiralty and colonial Vice-Admiralty courts
<span>(100,982)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="AVIA" id="AVIA" />
    <label for="AVIA">
    AVIA - Ministry of Aviation
<span>(94,739)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="CP" id="CP" />
    <label for="CP">
    CP - Court of Common Pleas
<span>(91,655)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="LAB" id="LAB" />
    <label for="LAB">
    LAB - Departments responsible for labour and employment matters
<span>(88,929)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="PRO" id="PRO" />
    <label for="PRO">
    PRO - Domestic Records of the Public Record Office, Gifts, Deposits, Notes and Transcripts
<span>(87,299)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="DSIR" id="DSIR" />
    <label for="DSIR">
    DSIR - Department of Scientific and Industrial Research
<span>(78,182)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="SC" id="SC" />
    <label for="SC">
    SC - Special Collections: records of various departments, arranged according to type
<span>(77,292)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="AB" id="AB" />
    <label for="AB">
    AB - UK Atomic Energy Authority
<span>(72,902)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="PIN" id="PIN" />
    <label for="PIN">
    PIN - Ministry of Pensions and National Insurance
<span>(70,880)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="MEPO" id="MEPO" />
    <label for="MEPO">
    MEPO - Metropolitan Police Office
<span>(70,492)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="WORK" id="WORK" />
    <label for="WORK">
    WORK - Office of Works and successors
<span>(68,013)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="STAC" id="STAC" />
    <label for="STAC">
    STAC - Court of Star Chamber and of other courts
<span>(57,258)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="GFM" id="GFM" />
    <label for="GFM">
    GFM - Copies of captured records of the German, Italian and Japanese Governments.
<span>(52,891)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="AN" id="AN" />
    <label for="AN">
    AN - British Transport Commission and the British Railways Board
<span>(48,829)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="DEFE" id="DEFE" />
    <label for="DEFE">
    DEFE - Ministry of Defence
<span>(48,277)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="DO" id="DO" />
    <label for="DO">
    DO - Dominions Office, and Commonwealth Relations and Foreign and Commonwealth Offices
<span>(46,775)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="TS" id="TS" />
    <label for="TS">
    TS - Treasury Solicitor and HM Procurator General&#39;s Department
<span>(45,692)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="ASSI" id="ASSI" />
    <label for="ASSI">
    ASSI - Justices of Assize, Gaol Delivery, Oyer and Terminer, and Nisi Prius
<span>(42,021)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="DL" id="DL" />
    <label for="DL">
    DL - Duchy of Lancaster
<span>(40,521)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="CUST" id="CUST" />
    <label for="CUST">
    CUST - Boards of Customs, Excise, and Customs and Excise, and HM Revenue and Customs
<span>(38,348)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="INF" id="INF" />
    <label for="INF">
    INF - Central Office of Information
<span>(37,835)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="ILB" id="ILB" />
    <label for="ILB">
    ILB - Coroner&#39;s Inquests into the London Bombings of 7 July 2005
<span>(33,260)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="WARD" id="WARD" />
    <label for="WARD">
    WARD - Court of Wards and Liveries
<span>(31,608)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="IND" id="IND" />
    <label for="IND">
    IND - Indexes to various series
<span>(30,733)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="CRES" id="CRES" />
    <label for="CRES">
    CRES - The Crown Estate and predecessors
<span>(28,231)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="FD" id="FD" />
    <label for="FD">
    FD - Medical Research Council
<span>(28,049)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="LCO" id="LCO" />
    <label for="LCO">
    LCO - Lord Chancellor&#39;s Office
<span>(27,868)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="PREM" id="PREM" />
    <label for="PREM">
    PREM - Prime Minister&#39;s Office
<span>(25,736)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="KB" id="KB" />
    <label for="KB">
    KB - Court of King&#39;s Bench
<span>(24,898)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="BN" id="BN" />
    <label for="BN">
    BN - Department of Health and Social Security
<span>(24,339)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="BH" id="BH" />
    <label for="BH">
    BH - Hudson&#39;s Bay Company Archives
<span>(23,584)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="PC" id="PC" />
    <label for="PC">
    PC - Privy Council
<span>(23,543)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="PL" id="PL" />
    <label for="PL">
    PL - Palatinate of Lancaster
<span>(23,281)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="PCOM" id="PCOM" />
    <label for="PCOM">
    PCOM - Prison Commission and Home Office Prison Department
<span>(23,017)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="FS" id="FS" />
    <label for="FS">
    FS - Registry of Friendly Societies
<span>(22,702)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="POWE" id="POWE" />
    <label for="POWE">
    POWE - Ministry of Power
<span>(21,635)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="AO" id="AO" />
    <label for="AO">
    AO - National Audit Office and predecessors
<span>(20,196)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="HS" id="HS" />
    <label for="HS">
    HS - Special Operations Executive
<span>(19,653)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="CSC" id="CSC" />
    <label for="CSC">
    CSC - Civil Service Commission
<span>(19,535)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="ZSPC" id="ZSPC" />
    <label for="ZSPC">
    ZSPC - British Transport Historical Records Office library: publications
<span>(17,752)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="BD" id="BD" />
    <label for="BD">
    BD - Welsh Office
<span>(17,407)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="HW" id="HW" />
    <label for="HW">
    HW - Government Communications Headquarters (GCHQ)
<span>(16,857)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="AT" id="AT" />
    <label for="AT">
    AT - Various departments for environment, transport, communities, and local government
<span>(16,726)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="OD" id="OD" />
    <label for="OD">
    OD - Department of Technical Co-operation, and successive Overseas Development bodies
<span>(16,262)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="MUN" id="MUN" />
    <label for="MUN">
    MUN - Ministry of Munitions and successors
<span>(13,864)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="EG" id="EG" />
    <label for="EG">
    EG - Department of Energy
<span>(13,571)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="AY" id="AY" />
    <label for="AY">
    AY - Various Research Institutes and Councils
<span>(12,637)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="DPP" id="DPP" />
    <label for="DPP">
    DPP - Director of Public Prosecutions
<span>(12,137)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="LR" id="LR" />
    <label for="LR">
    LR - Office of the Auditors of Land Revenue
<span>(11,940)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="BS" id="BS" />
    <label for="BS">
    BS - Records of defunct temporary bodies
<span>(11,712)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="FV" id="FV" />
    <label for="FV">
    FV - Department of Trade and Industry, 1970-1974
<span>(11,591)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="SUPP" id="SUPP" />
    <label for="SUPP">
    SUPP - Ministry of Supply and successors and the Ordnance Board
<span>(11,532)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="CRIM" id="CRIM" />
    <label for="CRIM">
    CRIM - Central Criminal Court
<span>(11,432)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="BW" id="BW" />
    <label for="BW">
    BW - British Council
<span>(11,053)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="MINT" id="MINT" />
    <label for="MINT">
    MINT - Royal Mint
<span>(10,308)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="LEV" id="LEV" />
    <label for="LEV">
    LEV - Inquiry into the Culture, Practices and Ethics of the Press (Leveson Inquiry)
<span>(10,003)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="LRRO" id="LRRO" />
    <label for="LRRO">
    LRRO - Land Revenue Records and Enrolments
<span>(9,698)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="CM" id="CM" />
    <label for="CM">
    CM - Property Services Agency
<span>(9,562)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="CJ" id="CJ" />
    <label for="CJ">
    CJ - Northern Ireland Office
<span>(9,339)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="DT" id="DT" />
    <label for="DT">
    DT - General Nursing Council for England and Wales
<span>(8,966)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="ZOS" id="ZOS" />
    <label for="ZOS">
    ZOS - Publications of the Ordnance Survey of Great Britain
<span>(8,822)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="BA" id="BA" />
    <label for="BA">
    BA - Civil Service Department
<span>(8,817)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="ES" id="ES" />
    <label for="ES">
    ES - Atomic Weapons Establishment
<span>(8,755)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="B" id="B" />
    <label for="B">
    B - Bankruptcy and debt relief courts
<span>(8,709)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="NSC" id="NSC" />
    <label for="NSC">
    NSC - National Savings Committee, the Post Office Savings Department and the Department for National Savings
<span>(8,358)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="STAT" id="STAT" />
    <label for="STAT">
    STAT - Stationery Office
<span>(7,926)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="DR" id="DR" />
    <label for="DR">
    DR - Civil Aviation Authority
<span>(7,790)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="EF" id="EF" />
    <label for="EF">
    EF - Health and Safety Commission and Executive
<span>(7,263)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="ZLIB" id="ZLIB" />
    <label for="ZLIB">
    ZLIB - British Transport Historical Records Office: publications
<span>(7,263)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="AST" id="AST" />
    <label for="AST">
    AST - Unemployment Assistance Boards
<span>(7,055)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="EW" id="EW" />
    <label for="EW">
    EW - Department of Economic Affairs
<span>(6,482)</span>
</label>
</li>
<li>
<input type="checkbox" name="_d" value="UGC" id="UGC" />
    <label for="UGC">
    UGC - Higher Education Funding Council for England
                                               <span>(6,311)</span>
                                               </label>
                                               </li>
                                               <li>
                                               <input type="checkbox" name="_d" value="BL" id="BL" />
    <label for="BL">
    BL - Council on Tribunals and successors
<span>(6,257)</span>
</label>
</li>
</ul>
<input name="Refine departments" value="Refine" type="submit" title="Refine departments" />
    </div>
    </form>
    </li>
    <li id="subjects">
    <form action="/results/r" method="get">
    <input name="_q" type="hidden" value="*" /><input name="_hb" type="hidden" value="tna" />
    <h3><a href="#" class="filter-toggler" id="subject-filters" role="tab">Subjects</a></h3>
<div class="filter-togglee" aria-labelledby="subject-filters" role="tabpanel">
    <ul>
    <li>
    <input type="checkbox" name="_tsj" value="C10065" id="C10065" />
    <label for="C10065">
    Armed Forces (General Administration)
<span>(9,392,340)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10092" id="C10092" />
    <label for="C10092">
    Army
    <span>(6,530,838)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10075" id="C10075" />
    <label for="C10075">
    Operations, battles and campaigns
<span>(6,248,824)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10019" id="C10019" />
    <label for="C10019">
    Conflict
    <span>(6,033,707)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10060" id="C10060" />
    <label for="C10060">
    Medals
    <span>(5,371,820)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10072" id="C10072" />
    <label for="C10072">
    Navy
    <span>(2,425,033)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10108" id="C10108" />
    <label for="C10108">
    Trade and commerce
<span>(1,643,431)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10055" id="C10055" />
    <label for="C10055">
    Litigation
    <span>(1,522,963)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10049" id="C10049" />
    <label for="C10049">
    International
    <span>(1,459,204)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10116" id="C10116" />
    <label for="C10116">
    Wills and probate
<span>(1,397,385)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10063" id="C10063" />
    <label for="C10063">
    Merchant seaman
<span>(1,094,694)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10131" id="C10131" />
    <label for="C10131">
    Europe and Russia
<span>(867,697)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10002" id="C10002" />
    <label for="C10002">
    Air Force
<span>(845,851)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10005" id="C10005" />
    <label for="C10005">
    Art, architecture and design
<span>(814,277)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10058" id="C10058" />
    <label for="C10058">
    Maps and plans
<span>(579,112)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10106" id="C10106" />
    <label for="C10106">
    Taxation
    <span>(488,622)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10096" id="C10096" />
    <label for="C10096">
    Research
    <span>(283,903)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10124" id="C10124" />
    <label for="C10124">
    Africa
    <span>(279,943)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10128" id="C10128" />
    <label for="C10128">
    Middle East
<span>(269,582)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10126" id="C10126" />
    <label for="C10126">
    Asia
    <span>(269,329)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10089" id="C10089" />
    <label for="C10089">
    Railways
    <span>(269,264)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10103" id="C10103" />
    <label for="C10103">
    Shipping
    <span>(263,679)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10036" id="C10036" />
    <label for="C10036">
    Farming
    <span>(247,161)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10077" id="C10077" />
    <label for="C10077">
    Pay and pensions
<span>(242,663)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10043" id="C10043" />
    <label for="C10043">
    Government finances
<span>(238,840)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10125" id="C10125" />
    <label for="C10125">
    Americas
    <span>(238,486)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10102" id="C10102" />
    <label for="C10102">
    Sex and gender
<span>(228,390)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10033" id="C10033" />
    <label for="C10033">
    Education
    <span>(219,486)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10134" id="C10134" />
    <label for="C10134">
    Local Government
<span>(216,684)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10059" id="C10059" />
    <label for="C10059">
    Marriage and divorce
<span>(215,772)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10052" id="C10052" />
    <label for="C10052">
    Labour
    <span>(213,700)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10136" id="C10136" />
    <label for="C10136">
    Official publications
<span>(202,190)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10039" id="C10039" />
    <label for="C10039">
    Food and drink
<span>(193,952)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10093" id="C10093" />
    <label for="C10093">
    Religions
    <span>(187,041)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10071" id="C10071" />
    <label for="C10071">
    Nationality
    <span>(186,666)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10009" id="C10009" />
    <label for="C10009">
    Census
    <span>(165,344)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10014" id="C10014" />
    <label for="C10014">
    Coal
    <span>(163,800)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10114" id="C10114" />
    <label for="C10114">
    Weapons
    <span>(163,355)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10118" id="C10118" />
    <label for="C10118">
    Personal and family papers
<span>(157,319)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10066" id="C10066" />
    <label for="C10066">
    Mining and quarrying
<span>(157,272)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10121" id="C10121" />
    <label for="C10121">
    Transport management
<span>(154,621)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10038" id="C10038" />
    <label for="C10038">
    Fishing
    <span>(152,454)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10130" id="C10130" />
    <label for="C10130">
    Caribbean
    <span>(149,922)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10056" id="C10056" />
    <label for="C10056">
    Manors
    <span>(138,458)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10135" id="C10135" />
    <label for="C10135">
    Legal
    <span>(134,555)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10028" id="C10028" />
    <label for="C10028">
    Diaries
    <span>(123,360)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10057" id="C10057" />
    <label for="C10057">
    Manufacturing
    <span>(120,870)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10115" id="C10115" />
    <label for="C10115">
    Welfare
    <span>(118,456)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10053" id="C10053" />
    <label for="C10053">
    Landed estates
<span>(118,139)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10132" id="C10132" />
    <label for="C10132">
    Ireland
    <span>(117,940)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10023" id="C10023" />
    <label for="C10023">
    Crime
    <span>(109,664)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10012" id="C10012" />
    <label for="C10012">
    Children
    <span>(104,790)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10127" id="C10127" />
    <label for="C10127">
    Indian Subcontinent
<span>(104,488)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10025" id="C10025" />
    <label for="C10025">
    Debt
    <span>(102,758)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10073" id="C10073" />
    <label for="C10073">
    Nuclear energy
<span>(98,331)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10084" id="C10084" />
    <label for="C10084">
    Poverty
    <span>(96,158)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10004" id="C10004" />
    <label for="C10004">
    Archives and libraries
<span>(89,309)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10107" id="C10107" />
    <label for="C10107">
    Tithes
    <span>(88,323)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10022" id="C10022" />
    <label for="C10022">
    Conveyancing
    <span>(88,097)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10050" id="C10050" />
    <label for="C10050">
    Internment
    <span>(85,561)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10016" id="C10016" />
    <label for="C10016">
    Communications
    <span>(85,269)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10112" id="C10112" />
    <label for="C10112">
    Treaties and alliances
<span>(80,085)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10129" id="C10129" />
    <label for="C10129">
    Australia and Pacific
<span>(75,696)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10040" id="C10040" />
    <label for="C10040">
    Forestry
    <span>(74,768)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10024" id="C10024" />
    <label for="C10024">
    Crown lands and estates
<span>(74,627)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10074" id="C10074" />
    <label for="C10074">
    Oil and gas
<span>(73,366)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10048" id="C10048" />
    <label for="C10048">
    Intelligence
    <span>(69,818)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10082" id="C10082" />
    <label for="C10082">
    Policing
    <span>(67,330)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10007" id="C10007" />
    <label for="C10007">
    Banking
    <span>(65,305)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10003" id="C10003" />
    <label for="C10003">
    Air transport
<span>(61,379)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10119" id="C10119" />
    <label for="C10119">
    Nursing
    <span>(59,709)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10001" id="C10001" />
    <label for="C10001">
    Aid and development
<span>(54,998)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10081" id="C10081" />
    <label for="C10081">
    Planning (Land and Property)
<span>(54,144)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10013" id="C10013" />
    <label for="C10013">
    Clothing
    <span>(51,579)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10098" id="C10098" />
    <label for="C10098">
    Road transport
<span>(51,212)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10061" id="C10061" />
    <label for="C10061">
    Medicine
    <span>(50,830)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10064" id="C10064" />
    <label for="C10064">
    Migration
    <span>(49,595)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10030" id="C10030" />
    <label for="C10030">
    Disarmament
    <span>(47,152)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10085" id="C10085" />
    <label for="C10085">
    Prisons
    <span>(43,531)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10083" id="C10083" />
    <label for="C10083">
    Population
    <span>(36,940)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10026" id="C10026" />
    <label for="C10026">
    Democracy
    <span>(36,706)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10008" id="C10008" />
    <label for="C10008">
    Canals and river transport
<span>(36,624)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10045" id="C10045" />
    <label for="C10045">
    Housing
    <span>(32,587)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10035" id="C10035" />
    <label for="C10035">
    Events and exhibitions
<span>(29,997)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10021" id="C10021" />
    <label for="C10021">
    Construction industries
<span>(29,242)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10088" id="C10088" />
    <label for="C10088">
    Radio and television
<span>(28,161)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10079" id="C10079" />
    <label for="C10079">
    Photography and film
<span>(27,298)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10032" id="C10032" />
    <label for="C10032">
    Disease
    <span>(25,521)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10042" id="C10042" />
    <label for="C10042">
    Friendly societies
<span>(23,525)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10051" id="C10051" />
    <label for="C10051">
    Iron, steel and metals
<span>(22,193)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10097" id="C10097" />
    <label for="C10097">
    Resources
    <span>(20,321)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10031" id="C10031" />
    <label for="C10031">
    Disasters and emergencies
<span>(19,901)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10044" id="C10044" />
    <label for="C10044">
    Hospitals
    <span>(19,396)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10062" id="C10062" />
    <label for="C10062">
    Mental illness
<span>(17,282)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10101" id="C10101" />
    <label for="C10101">
    Sewerage
    <span>(17,163)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10122" id="C10122" />
    <label for="C10122">
    Ancient Monuments and Historical Buildings
<span>(16,003)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10100" id="C10100" />
    <label for="C10100">
    Royalty
    <span>(15,886)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_tsj" value="C10070" id="C10070" />
    <label for="C10070">
    National Health Service
<span>(15,654)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10087" id="C10087" />
    <label for="C10087">
    Race relations
<span>(13,640)</span>
</label>
</li>
<li>
<input type="checkbox" name="_tsj" value="C10091" id="C10091" />
    <label for="C10091">
    Refugees
    <span>(12,912)</span>
    </label>
    </li>
    </ul>
    <input name="Refine subjects" value="Refine" type="submit" title="Refine subjects" />
    </div>
    </form>
    </li>
    <li id="catalogue-levels">
    <form action="/results/r" method="get">
    <input name="_q" type="hidden" value="*" /><input name="_hb" type="hidden" value="tna" />
    <h3><a href="#" class="filter-toggler" id="level-filters" role="tab">Catalogue level</a></h3>
<div class="filter-togglee" aria-labelledby="level-filters" role="tabpanel">
    <ul>
    <li>
    <input type="checkbox" name="_l" value="7" id="l_7" />
    <label for="l_7">
    Item - <span>(16,454,077)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_l" value="6" id="l_6" />
    <label for="l_6">
    Piece - <span>(7,252,143)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_l" value="0" id="l_0" />
    <label for="l_0">
    Not stated - <span>(33,570)</span>
</label>
</li>
<li>
<input type="checkbox" name="_l" value="3" id="l_3" />
    <label for="l_3">
    Series - <span>(19,129)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_l" value="2" id="l_2" />
    <label for="l_2">
    Division - <span>(1,207)</span>
    </label>
    </li>
    <li>
    <input type="checkbox" name="_l" value="1" id="l_1" />
    <label for="l_1">
    Department - <span>(433)</span>
    </label>
    </li>
    </ul>
    <input value="Refine" type="submit" title="Refine catalogue levels" />
    </div>
    </form>
    </li>
    <li id="closure-status">
    <form action="/results/r" method="get">
    <input name="_q" type="hidden" value="*" /><input name="_hb" type="hidden" value="tna" />
    <h3><a href="#" class="filter-toggler" id="closure-filters" role="tab">Closure status</a></h3>
<div class="filter-togglee" aria-labelledby="closure-filters" role="tabpanel">
    <ul>
    <li>
    <input type="checkbox" name="_cs" value="O" id="clsO" />
    <label for="clsO">
    Open Document - <span>(23,376,445)</span>
</label>
</li>
<li>
<input type="checkbox" name="_cs" value="C" id="clsC" />
    <label for="clsC">
    Closed Document - <span>(316,896)</span>
</label>
</li>
<li>
<input type="checkbox" name="_cs" value="R" id="clsR" />
    <label for="clsR">
    Retained Document - <span>(33,648)</span>
</label>
</li>
</ul>
<input name="Refine closure status" value="Refine" type="submit" title="Refine closure status" />
    </div>
    </form>
    </li>
    <li id="records-opening-date">
    <form action="/results/r" method="get">
    <input name="_q" type="hidden" value="*" /><input name="_hb" type="hidden" value="tna" />
    <h3><a href="#" class="filter-toggler" id="opening-date-filters" role="tab">Record opening date</a></h3>
<div class="filter-togglee" aria-labelledby="opening-date-filters" role="tabpanel">
    <ul>
    <li><input checked="checked" class="checkBox" id="rodany" name="_ro" type="radio" value="any" /><label for="rodany">Anytime</label></li>
<li><input class="checkBox" id="rod1" name="_ro" type="radio" value="1" /><label for="rod1">Opened during the last day</label></li>
<li><input class="checkBox" id="rod7" name="_ro" type="radio" value="7" /><label for="rod7">In the last week</label></li>
<li><input class="checkBox" id="rod183" name="_ro" type="radio" value="183" /><label for="rod183">In the last six months</label></li>
<li><input class="checkBox" id="rod365" name="_ro" type="radio" value="365" /><label for="rod365">In the last 12 months</label></li>
<li id="recordOpeningDate"><input class="checkBox" id="roddate" name="_ro" type="radio" value="date" /><label for="roddate">On a specific date</label><input id="rodDate" name="_rd" placeholder="dd/mm/yyyy" type="text" value="" /></li>
<li id="recordOpeningDateRange"><input class="checkBox" id="rodrange" name="_ro" type="radio" value="range" /><label for="rodrange">Within a date range</label><input id="rodfromdate" name="_rsd" placeholder="dd/mm/yyyy" type="text" value="" /><label class="to" for="rodtodate">to</label><input id="rodtodate" name="_red" placeholder="dd/mm/yyyy" type="text" value="" /></li>
</ul>
<input name="Refine record opening date" value="Refine" type="submit" title="Refine record opening date" />
    </div>
    </form>
    </li>
    </ul>`;

