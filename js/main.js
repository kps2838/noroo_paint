$(function(){
    window.onresize = function(){
        document.location.reload();
    }
    let w = window.innerWidth;
    console.log(w);
    if(w >= 1024){
        $('#gnb > ul > li').mouseover(function(){
            $('#gnb').css('height','409px')
            setTimeout(function(){
                $('.depth2').addClass('on')
            },200);
            $('.menu-line').addClass('on')
        });

        $('#gnb').mouseleave(function(){
            $('#gnb').css('height','96px');            
            setTimeout(function(){
                $('.depth2').removeClass('on')
            },150);            
            $('.menu-line').removeClass('on');
        });
    
        $('#gnb li ul').hover(function(){
            $('#gnb .menu-line-click').addClass('on')
            },function(){
            $('#gnb .menu-line-click').removeClass('on')
        });


        $('#gnb > ul > li').eq(0).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '291px');
        });

        $('#gnb > ul > li').eq(1).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '441px')
        });

        $('#gnb > ul > li').eq(2).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '591px')
        });

        $('#gnb > ul > li').eq(3).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '741px')
        });

        $('#gnb > ul > li').eq(4).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '891px')
        });

        $('#gnb > ul > li').eq(5).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '1041px')
        });


        $('#site-map').click(function(){
            $('.sitemap-modal').css('top', '0').css('opacity','1')
        });
    
        $('#close').click(function(){
            $('.sitemap-modal').css('top', '-100vh').css('opacity','0')
        });


        let sns_position = 0;
        let sns_slideNum = 0;

        $('#sns .btn .next').click(function(){
            if(sns_slideNum < 2){
                sns_position -= 1345;
                $('#sns .sns_slide .sns_slide_wrap').css('transform', `translateX(${sns_position}px)`);
                sns_slideNum = sns_slideNum+1;
            };
        });

        $('#sns .btn .prev').click(function(){
            if(sns_slideNum > 0){
                sns_position += 1345;
                $('#sns .sns_slide .sns_slide_wrap').css('transform', `translateX(${sns_position}px)`);
                sns_slideNum = sns_slideNum-1;
            } 
            else if(sns_slideNum == 0){
                $('#sns .sns_slide .sns_slide_wrap').css('transform', `translateX(0)`);

            }
        });

        $('#sns .images li:not(:first-child) img').hover(function(){
            let photo = $(this).attr('src');
            $(this).parents('.images').find('li:first-child img').attr('src', photo);
        }, function(){
            let photo = $(this).attr('src');
            let original = photo.substring(0, photo.length-5) + `1.jpg`;
            console.log(original);
            $(this).parents('.images').find('li:first-child img').attr('src', original);
        });

    
        $('#news .info-container .info-box').hover(function(){
            $(this).find('.text').css('top','0')}
            , function(){
            $(this).find('.text').css('top','236px')
        });



        $('#media .btn .next').click(function(){
            $('#media .media_slide .media_slide_wrap').css('transform', `translateX(-916px)`);
            $(this).find('img').css('opacity','0.5');
            $('#media .btn .prev img').css('opacity', '1');
            $('#media .btn p').text('2/2');
        });


        $('#media .btn .prev').click(function(){
            $('#media .media_slide .media_slide_wrap').css('transform', `translateX(0)`);
            $(this).find('img').css('opacity','0.5');
            $('#media .btn .next img').css('opacity', '1');
            $('#media .btn p').text('1/2');
        });


        $('#media .media-box').hover(function(){
            $(this).css('background-size', '120%');
            $(this).find('.media-title').css('width','100%').css('height','100%').css('padding','20px');
        }, function(){
            $(this).css('background-size', '100%');
            $(this).find('.media-title').css('width','340px').css('height','340px').css('padding','10px');
        });



    } else if (w >= 768 && w <= 1023){
        $('#gnb > ul > li').mouseover(function(){
            $('#gnb').css('height','409px')
            setTimeout(function(){
                $('.depth2').addClass('on')
            },200);
            $('.menu-line').addClass('on')
        });

        $('#gnb').mouseleave(function(){
            $('#gnb').css('height','96px');            
            setTimeout(function(){
                $('.depth2').removeClass('on')
            },150);            
            $('.menu-line').removeClass('on');
        });


        $('#site-map').click(function(){
            $('.sitemap-modal').css('top', '0').css('opacity','1')
        });
    
        $('#close').click(function(){
            $('.sitemap-modal').css('top', '-100vh').css('opacity','0')
        });


        let m_sns_position = 0;
        let sns_slideNum = 0;
        let w_90vw = parseInt($(window).width() * 0.9);
    
        $('#sns .btn .next').click(function(){
            if(sns_slideNum < 2){
                m_sns_position -= w_90vw + 20;
                $('#sns .sns_slide .sns_slide_wrap').css('transform', `translateX(${m_sns_position}px)`);
                sns_slideNum = sns_slideNum+1;
            };
        });
    
        $('#sns .btn .prev').click(function(){
            if(sns_slideNum > 0){
                m_sns_position += w_90vw + 20;
                $('#sns .sns_slide .sns_slide_wrap').css('transform', `translateX(${m_sns_position}px)`);
                sns_slideNum = sns_slideNum-1;
            } 
            else if(sns_slideNum == 0){
                $('#sns .sns_slide .sns_slide_wrap').css('transform', `translateX(0)`);
    
            }
        });

        $('#sns .images li:not(:first-child) img').hover(function(){
            let photo = $(this).attr('src');
            $(this).parents('.images').find('li:first-child img').attr('src', photo);
        }, function(){
            let photo = $(this).attr('src');
            let original = photo.substring(0, photo.length-5) + `1.jpg`;
            console.log(original);
            $(this).parents('.images').find('li:first-child img').attr('src', original);
        });

    
        $('#news .info-container .info-box').hover(function(){
            $(this).find('.text').css('top','0')}
            , function(){
            $(this).find('.text').css('top','236px')
        });



        $('#media .btn .next').click(function(){
            $('#media .media_slide .media_slide_wrap').css('transform', `translateX(-80vw)`);
            $(this).find('img').css('opacity','0.5');
            $('#media .btn .prev img').css('opacity', '1');
            $('#media .btn p').text('2/2');
        });
    
    
        $('#media .btn .prev').click(function(){
            $('#media .media_slide .media_slide_wrap').css('transform', `translateX(0)`);
            $(this).find('img').css('opacity','0.5');
            $('#media .btn .next img').css('opacity', '1');
            $('#media .btn p').text('1/2');
        });
    
    
        $('#media .media-box').hover(function(){
            $(this).css('background-size', '120%');
            $(this).find('.media-title').css('width','100%').css('height','100%');
        }, function(){
            $(this).css('background-size', '100%');
            $(this).find('.media-title').css('width','250px').css('height','250px');
        });

    }
    else if (w <= 767){
    $('#gnb .mobile-menu').click(function(){
        $('#main-header .bg_dark').toggleClass('on');
        $('#gnb > ul').toggleClass('on');
    });

    $('#gnb > ul > li').click(function(){
        $('#gnb > ul > li').css('background-color','transparent');
        $('#gnb > ul > li').children('a').css('color','#000');
        $('#gnb .depth2').removeClass('on');
        $(this).find('.depth2').toggleClass('on');
        $(this).css('background-color','var(--main-color)');
        $(this).children('a').css('color','#fff');
    });


    let m_sns_position = 0;
    let sns_slideNum = 0;
    let w_90vw = parseInt($(window).width() * 0.9);

    $('#sns .btn .next').click(function(){
        if(sns_slideNum < 2){
            m_sns_position -= w_90vw + 20;
            $('#sns .sns_slide .sns_slide_wrap').css('transform', `translateX(${m_sns_position}px)`);
            sns_slideNum = sns_slideNum+1;
        };
    });

    $('#sns .btn .prev').click(function(){
        if(sns_slideNum > 0){
            m_sns_position += w_90vw + 20;
            $('#sns .sns_slide .sns_slide_wrap').css('transform', `translateX(${m_sns_position}px)`);
            sns_slideNum = sns_slideNum-1;
        } 
        else if(sns_slideNum == 0){
            $('#sns .sns_slide .sns_slide_wrap').css('transform', `translateX(0)`);

        }
    });


    $('#news .info-container .info-box').off();


    $('#media .btn .next').click(function(){
        $('#media .media_slide .media_slide_wrap').css('transform', `translateX(-356px)`);
        $(this).find('img').css('opacity','0.5');
        $('#media .btn .prev img').css('opacity', '1');
        $('#media .btn p').text('2/2');
    });


    $('#media .btn .prev').click(function(){
        $('#media .media_slide .media_slide_wrap').css('transform', `translateX(0)`);
        $(this).find('img').css('opacity','0.5');
        $('#media .btn .next img').css('opacity', '1');
        $('#media .btn p').text('1/2');
    });


    $('#media .media-box').hover(function(){
        $(this).css('background-size', '120%');
        $(this).find('.media-title').css('width','100%').css('height','100%');
    }, function(){
        $(this).css('background-size', '100%');
        $(this).find('.media-title').css('width','145px').css('height','145px');
    });



    $('#main-footer .text').find('.adress').html('<p>(13977) 경기도 안양시 만안구 박달로 351 <br> 대표이사 조성국, 김용기 <br> 사업자등록번호 : 123-86-06034 <br>대표전화 031-467-6114 | 소비자 상담실 080-944-7777(수신자 부담)</p)');
    
    };


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
          } else {
            entry.target.classList.remove('on');
          }
        });
      },{
        threshold : 0.3,
      });

      const about = document.querySelectorAll('#about > div');
      about.forEach(el => observer.observe(el));

      const sns = document.querySelectorAll('#sns > div');
      sns.forEach(el => observer.observe(el));

      const news = document.querySelectorAll('#news div');
      news.forEach(el => observer.observe(el));

      const media = document.querySelectorAll('#media div');
      media.forEach(el => observer.observe(el));

})