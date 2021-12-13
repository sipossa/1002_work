<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    include_once(G5_THEME_SHOP_PATH.'/shop.tail.php');
    return;
}
?>
<?php
if(!defined('_INDEX_')) { 
    include_once(G5_THEME_PATH.'/sub_tail.php');
}
?>
        <footer class="footer">
            <ul>
                <li>대표 : 이두열</li>
                <li>사업자등록번호 : 615-81-18295</li>
                <li>경상남도 김해시 생림면 나전리 301-3</li>
                <li>Tel : 055-329-3684</li>
                <li>Fax : 055-329-3890</li>
            </ul>
            <address>© Korean National Police Veteran All Rights Reserved.</address>
        </footer>
    </div>
    <script src="<?php echo G5_THEME_URL ?>/js/aos.js"></script>
    <script src="<?php echo G5_THEME_URL ?>/js/slick.min.js"></script>
    <script src="<?php echo G5_THEME_URL ?>/js/jquery.mb.YTPlayer.min.js"></script>
    <script src="<?php echo G5_THEME_URL ?>/js/soon.js"></script>
<?php
if(G5_DEVICE_BUTTON_DISPLAY && !G5_IS_MOBILE) { ?>
<?php
}

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");