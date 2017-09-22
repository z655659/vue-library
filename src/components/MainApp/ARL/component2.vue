<template>
    <div class="Asa-content">
        <!-- 表格 -->
        <!-- 零散数据 -->
        <!-- {{}} -->
        <table class="fir-table"  border="0" cellspacing="0" cellpadding="0">
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">カテゴリ</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.category_name}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">大分類</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{item.major_category}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg1 left">
                    <span class="table-span msg1">中分類</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.medium_category}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">小分類</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{item.small_category}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg1 left">
                    <span class="table-span msg1">詳細</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.detail}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">機能・開発項目の概要説明</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{item.dev_summary}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg1 left">
                    <span class="table-span msg1">Summary of Function and Development item</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.summary}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">補足</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{item.extra_info}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg1 left">
                    <span class="table-span msg1">SubID</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.sub_id}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">要件ID</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{item.arl_id}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg1 left">
                    <span class="table-span msg1">転記してきた要件</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.from_info}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">備考、不明点</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{item.memo}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg1 left">
                    <span class="table-span msg1">除外</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.except}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">状態</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{item.status}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg1 left">
                    <span class="table-span msg1">トリガー</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.trigger}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">動作</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{item.action}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg1 left">
                    <span class="table-span msg1">I/F仕様</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.IF_book}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">Center仕様</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{item.center_book}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg1 left">
                    <span class="table-span msg1">その他の仕様</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.other_book}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">同件管理</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{item.same_content}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg1 left">
                    <span class="table-span msg1">システム構成ID</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{item.system_id}}</span>
                </td>
            </tr>

        </table>
        <!--  dest_category-->
        <table class="fir-table"  border="0" cellspacing="0" cellpadding="0">
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">ユーザー</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemdestCategory.user}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">ディーラー</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{itemdestCategory.dealer}}</span>
                </td>
            </tr>
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">開発者</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemdestCategory.developer}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">サプライヤー</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{itemdestCategory.supplier}}</span>
                </td>
            </tr>
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">社内規定</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemdestCategory.company_rule}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">法規（自工会等を含む)</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{itemdestCategory.law}}</span>
                </td>
            </tr>
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">過去不具合対応</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemdestCategory.history_problem}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">目的、背景、ポリシー</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{itemdestCategory.dest_background}}</span>
                </td>
            </tr>
        </table>
        <!-- HMI仕様書表格 -->
        <h2 class="Asa-title">HMI仕様書</h2>
        <table class="fir-table"  border="0" cellspacing="0" cellpadding="0">
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">仕様書番号</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemHMIbook.book_no}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">バージョン</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{itemHMIbook.version}}</span>
                </td>
            </tr>
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">ファイル名</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemHMIbook.file_name}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">章</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{itemHMIbook.chapter}}</span>
                </td>
            </tr>
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">Page</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemHMIbook.page}}</span>
                </td>
            </tr>
        </table>
        <!-- 機能仕様書 -->
        <h2 class="Asa-title">機能仕様書</h2>
        <table class="fir-table"  border="0" cellspacing="0" cellpadding="0">
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">仕様書番号</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemFuncbook.book_no}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">バージョン</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{itemFuncbook.version}}</span>
                </td>
            </tr>
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">ファイル名</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemFuncbook.file_name}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">章</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{itemFuncbook.chapter}}</span>
                </td>
            </tr>
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">Page</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemFuncbook.page}}</span>
                </td>
            </tr>
        </table>
        <!--  -->
        <h2 class="Asa-title">ARL要件抽出の担当者</h2>
        <table class="fir-table"  border="0" cellspacing="0" cellpadding="0">
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">担当</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemmanageMemo.user}}</span>
                </td>
            </tr>
            <tr>
               <td class="msg3 left">
                    <span class="table-span msg3">未要件分析</span>
                </td>
               <td class="msg4">
                    <span class="table-span msg4">{{itemmanageMemo.no_analyze}}</span>
                </td>
            </tr>
            <tr>
               <td class="left msg1">
                    <span class="table-span msg1">要件漏れ</span>
                </td>
               <td class="msg2">
                    <span class="table-span msg2">{{itemmanageMemo.miss_content}}</span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import bus from '../../../assets/js/event.js'
    export default{
      name : 'Asacontent',
      data:function(){
        return{
          itemHMIbook:{},
          item:{},
          itemdestCategory:{},
          itemFuncbook:{},
          itemmanageMemo:{},
          ID:this.$route.params.ARL_id,
          res:'',
        }
      },
     created(){
                axios.get("http://192.168.10.13:5000/ARLContent/"+this.ID).then(res => {
                // console.log(self)
                // alert(11)
                this.item=res.data.content
                this.itemHMIbook=res.data.content.HMI_book[0];
                this.itemFuncbook=res.data.content.func_book[0];
                this.itemdestCategory=res.data.content.dest_category;
                this.itemmanageMemo=res.data.content.manage_memo;
              console.log(this.itemHMIbook,'xinxi')
              })
     
      }   
    }
</script>

<style scoped>
    *{margin: 0;padding: 0}
    ul,li{list-style: none;}
    a{text-decoration: none;}
    .Asa-content{
      width: 90%;
      margin: 0 auto;
      margin-top:5%;
    }
    table{
      width:100%;
      /* border-collapse: collapse;  */
      margin-top: 5%;
      border-left: 20px solid rgb(205,164,59);
    }
    tr{
      width: 100%;
    }
    td{
      width: 50%;
      word-break:break-all; 
    }
     .table-span{
      display: block;
      *display: none;
      padding:5px;
    }
    .msg1{
      background: rgb(89,89,89);
      color:rgb(205,164,59) 
    }
    .msg2{
      background: rgb(150,150,146);
      color: rgb(47,48,66);
    }
    .msg3{
      background: rgb(54,54,54);
      color:rgb(205,164,59);
    }
    .msg4{
      background: rgb(130,130,125);
      color: rgb(228,227,225);
    }
    .Asa-title{
      width:100%;
      margin: 0 auto;
      margin-top:5%;
    }
</style>
