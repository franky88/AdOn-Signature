const RootComponent = {
    name: "AdOn Signature",
    data() {
        return {
            sigName: "Your name",
            sigPosition: "Your position",
            sigPhone: "07 5586 1400",
            sigMobile: "0401 736 730",
            isShowOpt1: true,
            isShowOpt2: false,
            isShowOpt3: false
        }
    },
    methods: {
        showFormOpt1() {
            var fls = false
            this.isShowOpt1 = true
            this.isShowOpt2 = fls
            this.isShowOpt3 = fls
        },
        showFormOpt2() {
            var fls = false
            this.isShowOpt1 = fls
            this.isShowOpt2 = true
            this.isShowOpt3 = fls
        },
        showFormOpt3() {
            var fls = false
            this.isShowOpt1 = fls
            this.isShowOpt2 = fls
            this.isShowOpt3 = true
        },
        getData(){
            const sigName = document.getElementById('signame').value;
            const sigPosition = document.getElementById('sigposition').value;
            const sigPhone = document.getElementById('sigphone').value;
            var openSig = window.open('', '', 'fullscreen=yes,menubar=yes');
            openSig.document.write("<table style='width: 760px; height: auto; font-family: sans-serif; background: url(https://i.postimg.cc/T114xfKp/bg-gradiant.png); background-repeat: no-repeat; padding: 10px; background-size: cover; color: #fff; border-radius: 10px; margin: 0;'><tbody><tr><td><img style='width: 180px; height: auto; padding: -10px;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AOG-logo_white.png' alt='AdOn logo'></td><td style='padding-top: 10px;'><strong style='font-size: 16px;'>"+sigName+"<br><small>"+sigPosition+"</small></strong><p style='font-size: 12px;'><a href='tel:"+sigPhone+"' target='_blank' style='text-decoration: none; color: #fff; align-items: center;'><span><img style='width: 12px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-01.png' alt='phone'></span> &nbsp "+sigPhone+"</a><br><a href='https://www.adongroup.com.au' target='_blank' style='text-decoration: none; color: #fff; align-items: center;'><span><img style='width: 12px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-02.png' alt='internet'></span> &nbsp www.adongroup.com.au</a><br></p></td><td><img style='width: 300px; height: auto; float: right;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AdOn-logo-and-partners-higher-res-updated-v2.gif' alt='Partner'></td></tr><tr><td colspan='3'><p style='line-height: 1.2; font-size: 8px; padding-left: 15px; padding-right: 15px;'>This email, its contents and any attachments are strictly confidential. They must not be used, distributed, copied or read by any person other than the addressee. Unauthorised use, disclosure, copying or reliance on the contents of and attachments to this email by anyone other than the addressee may be unlawful. If you have received this email and attachments in error please contact us at Ad on Group immediately to facilitate its return.</p></td></tr></tbody></table>")
        },
        getData2(){
            const sigName = document.getElementById('signame2').value;
            const sigPosition = document.getElementById('sigposition2').value;
            const sigPhone = document.getElementById('sigphone2').value;
            const sigMobile = document.getElementById('sigmobile2').value;
            var openSig = window.open('', '', 'fullscreen=yes');
            openSig.document.write("<table style='width: 760px; height: auto; font-family: sans-serif; background: url(https://i.postimg.cc/T114xfKp/bg-gradiant.png); background-repeat: no-repeat; padding: 10px; background-size: cover; color: #fff; border-radius: 10px; margin: 0;'><tbody><tr><td><img style='width: 180px; height: auto; padding: -10px;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AOG-logo_white.png' alt='AdOn logo'></td><td style='padding-top: 10px;'><strong style='font-size: 16px;'>"+sigName+"<br><small>"+sigPosition+"</small></strong><p style='font-size: 12px;'><a href='tel:"+sigPhone+"' target='_blank' style='text-decoration: none; color: #fff; align-items: center;'><span><img style='width: 12px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-01.png' alt='phone'></span> &nbsp "+sigPhone+"</a><br><a href='tel:"+sigMobile+"' target='_blank' style='text-decoration: none; color: #fff; align-items: center;'><span><img style='width: 12px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-mobile-01.png' alt='phone'></span> &nbsp "+sigMobile+"</a><br><a href='https://www.adongroup.com.au' target='_blank' style='text-decoration: none; color: #fff; align-items: center;'><span><img style='width: 12px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-02.png' alt='internet'></span> &nbsp www.adongroup.com.au</a><br></p></td><td><img style='width: 300px; height: auto; float: right;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AdOn-logo-and-partners-higher-res-updated-v2.gif' alt='Partner'></td></tr><tr><td colspan='3'><p style='line-height: 1.2; font-size: 8px; padding-left: 15px; padding-right: 15px;'>This email, its contents and any attachments are strictly confidential. They must not be used, distributed, copied or read by any person other than the addressee. Unauthorised use, disclosure, copying or reliance on the contents of and attachments to this email by anyone other than the addressee may be unlawful. If you have received this email and attachments in error please contact us at Ad on Group immediately to facilitate its return.</p></td></tr></tbody></table>")
        },
        getData3(){
            const sigName = document.getElementById('signame3').value;
            const sigPosition = document.getElementById('sigposition3').value;
            const sigMobile = document.getElementById('sigmobile3').value;
            var openSig = window.open('', '', 'fullscreen=yes');
            openSig.document.write("<table style='width: 760px; height: auto; font-family: sans-serif; background: url(https://i.postimg.cc/T114xfKp/bg-gradiant.png); background-repeat: no-repeat; padding: 10px; background-size: cover; color: #fff; border-radius: 10px; margin: 0;'><tbody><tr><td><img style='width: 180px; height: auto; padding: -10px;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AOG-logo_white.png' alt='AdOn logo'></td><td style='padding-top: 10px;'><strong style='font-size: 16px;'>"+sigName+"<br><small>"+sigPosition+"</small></strong><p style='font-size: 12px;'><a href='tel:"+sigMobile+"' target='_blank' style='text-decoration: none; color: #fff; align-items: center;'><span><img style='width: 12px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-mobile-01.png' alt='phone'></span> &nbsp "+sigMobile+"</a><br><a href='https://www.adongroup.com.au' target='_blank' style='text-decoration: none; color: #fff; align-items: center;'><span><img style='width: 12px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-02.png' alt='internet'></span> &nbsp www.adongroup.com.au</a><br></p></td><td><img style='width: 300px; height: auto; float: right;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AdOn-logo-and-partners-higher-res-updated-v2.gif' alt='Partner'></td></tr><tr><td colspan='3'><p style='line-height: 1.2; font-size: 8px; padding-left: 15px; padding-right: 15px;'>This email, its contents and any attachments are strictly confidential. They must not be used, distributed, copied or read by any person other than the addressee. Unauthorised use, disclosure, copying or reliance on the contents of and attachments to this email by anyone other than the addressee may be unlawful. If you have received this email and attachments in error please contact us at Ad on Group immediately to facilitate its return.</p></td></tr></tbody></table>")
        }
    }
}

const app = Vue.createApp(RootComponent).mount("#app");