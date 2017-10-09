<template>
    <div class="Asa-content">
		<el-collapse v-model="activeNames">
		  <el-collapse-item title="ARL目录" name="1">
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
            </table>
		  </el-collapse-item>
		  <el-collapse-item title="ARL项目" name="2">
		    <table class="fir-table"  border="0" cellspacing="0" cellpadding="0">
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
            </table>
		  </el-collapse-item>
		  <el-collapse-item title="目的分类" name="3">
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
		  </el-collapse-item>
		  <el-collapse-item title="HMI仕様書" name="4">
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
		  </el-collapse-item>
		  <el-collapse-item title="機能仕様書" name="5">
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
		  </el-collapse-item>
		  <el-collapse-item title="其它仕様書" name="6">
		  	<table class="fir-table"  border="0" cellspacing="0" cellpadding="0">
	            <tr>
	               <td class="left msg1">
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
	                    <span class="table-span msg4">{{item.Centent_book}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">其它仕様</span>
	                </td>
	               <td class="msg2">
	                    <span class="table-span msg2">{{item.Other_book}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="msg3 left">
	                    <span class="table-span msg3">同件管理</span>
	                </td>
	               <td class="msg4">
	                    <span class="table-span msg4">{{item.Similar_book}}</span>
	                </td>
	            </tr>
	        </table>
		  </el-collapse-item>
		  <el-collapse-item title="ModelList" name="7">
		  	<table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	            	<td rowspan="6" style="background: #576782;" >
	                    <span>Japan</span>
	                </td>
	            	<td rowspan="5" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg3">
	                    <span class="table-span msg3">T_EMV (ディスプレイ一体)</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[0]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg1">
	                    <span class="table-span msg1">T_EMV (Toyota Touch Separate Display)</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[1]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T1MEUなし</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[2]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T1＋MEU Low</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[3]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T1＋MEU High</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[4]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td  style="background: #465361;" >
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg1">
	                	<span class="table-span msg1">L2</span>
	                </td>
	                <td class="msg2">
	                	<span class="table-span msg2">{{item.model_list[5]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	            	<td rowspan="6" style="background: #334869;">
	                    <span>N.America</span>
	                </td>
	            	<td rowspan="4" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg3">
	                    <span class="table-span msg3">TO</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[6]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T1</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[7]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T2</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[8]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T_EMV(Toyota Touch Separate Display)</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[9]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td  rowspan="2" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg3">
	                	<span class="table-span msg3">L1</span>
	                </td>
	                <td class="msg4" >
	                	<span class="table-span msg4">{{item.model_list[10]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg1">
	                    <span class="table-span msg1">L2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[11]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	            	<td rowspan="6" style="background: #576782;">
	                    <span>Europe/Russia</span>
	                </td>
	            	<td rowspan="3" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	               <td class="left msg3">
	                    <span class="table-span msg3">T1</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[12]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[13]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T_EMV(Toyota Touch Separate Display)</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[14]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="3" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg1">
	                	<span class="table-span msg1">L1</span>
	                </td>
	                <td class="msg2">
	                	<span class="table-span msg2">{{item.model_list[15]}}</span>
	                </td>
	            </tr>
	            <tr>
	            	
	                <td class="left msg3">
	                    <span class="table-span msg3">L1.5</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[16]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg1">
	                    <span class="table-span msg1">L2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[17]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	               <td rowspan="6" style="background: #334869;">
	                    <span>China</span>
	                </td>
	            	<td rowspan="2" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	               <td class="left msg3">
	                    <span class="table-span msg3">T1</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[18]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[19]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="3" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg3">
	                	<span class="table-span msg3">L1</span>
	                </td>
	                <td class="msg4">
	                	<span class="table-span msg4">{{item.model_list[20]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg1">
	                    <span class="table-span msg1">L1.5</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[21]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg3">
	                    <span class="table-span msg3">L2</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[22]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	               <td rowspan="3" style="background: #576782;">
	                    <span>Hong Kong</span>
	                </td>
	            	<td style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg1">
	                    <span class="table-span msg1">T1</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[23]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="2" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td class="left msg3">
	                    <span class="table-span msg3">L1</span>
	                </td>
	                <td class="msg4">
	                	<span class="table-span msg4">{{item.model_list[24]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg1">
	                    <span class="table-span msg1">L2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[25]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	               <td rowspan="5" style="background: #334869;">
	                    <span>SouthEast Asia / Thailand</span>
	                </td>
	            	<td rowspan="3" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg1">
	                    <span class="table-span msg1">T1</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[26]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T2</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[27]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T_EMV(Toyota Touch Separate Display)</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[28]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="2" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg1">
	                	<span class="table-span msg1">L1</span>
	                </td>
	                <td class="msg2">
	                	<span class="table-span msg2">{{item.model_list[29]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg3">
	                    <span class="table-span msg3">L2</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[30]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	               <td rowspan="5" style="background: #576782;">
	                    <span>Middle East</span>
	                </td>
	            	<td rowspan="3" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg1">
	                    <span class="table-span msg1">T1</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[31]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T2</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[32]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T_EMV(Toyota Touch Separate Display)</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[33]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="2" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg3">
	                	<span class="table-span msg3">L1</span>
	                </td>
	                <td class="msg4">
	                	<span class="table-span msg4">{{item.model_list[34]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg1">
	                    <span class="table-span msg1">L2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[35]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	               <td rowspan="5" style="background: #334869;">
	                    <span>South and Central America</span>
	                </td>
	            	<td rowspan="3" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg3">
	                    <span class="table-span msg3">T1</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[36]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[37]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T_EMV(Toyota Touch Separate Display)</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[38]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="2" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg1">
	                	<span class="table-span msg1">L1</span>
	                </td>
	                <td class="msg2">
	                	<span class="table-span msg2">{{item.model_list[39]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg3">
	                    <span class="table-span msg3">L2</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[40]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	               <td rowspan="5" style="background: #576782;">
	                    <span>Oceania</span>
	                </td>
	            	<td rowspan="3" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg1">
	                    <span class="table-span msg1">T1</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[41]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T2</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[42]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T_EMV(Toyota Touch Separate Display)</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[43]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="2" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg3">
	                	<span class="table-span msg3">L1</span>
	                </td>
	                <td class="msg4">
	                	<span class="table-span msg4">{{item.model_list[44]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg1">
	                    <span class="table-span msg1">L2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[45]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	               <td rowspan="4" style="background: #334869;">
	                    <span>Korea</span>
	                </td>
	            	<td rowspan="2" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg3">
	                    <span class="table-span msg3">T1</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[46]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[47]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="2" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg3">
	                	<span class="table-span msg3">L1</span>
	                </td>
	                <td class="msg4">
	                	<span class="table-span msg4">{{item.model_list[48]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg1">
	                    <span class="table-span msg1">L2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[49]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	               <td rowspan="5" style="background: #576782;">
	                    <span>South Africa</span>
	                </td>
	            	<td rowspan="3" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg3">
	                    <span class="table-span msg3">T1</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[50]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[51]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T_EMV(Toyota Touch Separate Display</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[52]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="2" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg1">
	                	<span class="table-span msg1">L1</span>
	                </td>
	                <td class="msg2">
	                	<span class="table-span msg2">{{item.model_list[53]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg3">
	                    <span class="table-span msg3">L2</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[54]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	               <td rowspan="5" style="background: #334869;">
	                    <span>Taiwan</span>
	                </td>
	            	<td rowspan="3" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg1">
	                    <span class="table-span msg1">T1</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[55]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T2</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[56]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T_EMV(Toyota Touch Separate Display)</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[57]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="2" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg3">
	                	<span class="table-span msg3">L1</span>
	                </td>
	                <td class="msg4">
	                	<span class="table-span msg4">{{item.model_list[58]}}</span>
	                </td>
	            </tr>
	            <tr>
	                <td class="left msg1">
	                    <span class="table-span msg1">L2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[59]}}</span>
	                </td>
	            </tr>
	        </table>
	        <table  border="0" cellspacing="0" cellpadding="0" class="second_table">
	            <tr>
	               <td rowspan="5" style="background: #576782;">
	                    <span>India</span>
	                </td>
	            	<td rowspan="3" style="background: #242f40;">
	                    <span>Toyota</span>
	                </td>
	                <td class="left msg3">
	                    <span class="table-span msg3">T1</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[60]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td class="left msg1">
	                    <span class="table-span msg1">T2</span>
	                </td>
	                <td class="msg2">
	                    <span class="table-span msg2">{{item.model_list[61]}}</span>
	                </td>
	            </tr>
	                
	            <tr>
	               <td class="left msg3">
	                    <span class="table-span msg3">T_EMV(Toyota Touch Separate Display)</span>
	                </td>
	                <td class="msg4">
	                    <span class="table-span msg4">{{item.model_list[62]}}</span>
	                </td>
	            </tr>
	            <tr>
	               <td rowspan="2" style="background: #465361;">
	                    <span>Lexus</span>
	                </td>
	                <td  class="left msg1">
	                	<span class="table-span msg1">L2</span>
	                </td>
	                <td class="msg2">
	                	<span class="table-span msg2">{{item.model_list[63]}}</span>
	                </td>
	            </tr>
	        </table>
		  </el-collapse-item>
		  <el-collapse-item title="管理用メモ" name="4">
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
	            <tr>
	               <td class="msg3 left">
	                    <span class="table-span msg3">システム構成ID</span>
	                </td>
	               <td class="msg4">
	                    <span class="table-span msg4">{{item.system_id}}</span>
	                </td>
	            </tr>
	        </table>
		  </el-collapse-item>
		</el-collapse>
        <div class="fixed">
			<button type="submit" @click='back' class="back">返回</button>
		</div>
    </div>
</template>

<script>
import axios from 'axios'
    export default{
      name : 'Asacontent',
      data:function(){
        return{
          itemHMIbook:{},
          item:{model_list:[]},
          itemdestCategory:{},
          itemFuncbook:{},
          itemmanageMemo:{},
          ID:this.$route.params.ARL_id,
          res:'',
          activeNames: ['1','2'],
     	  model_list:[]
        }
      },
      created(){
      	for(var i=0;i<63;i++){
      		this.item.model_list.push("")
      	}
      	if(this.ID !=""){
      	  axios.get(this.Ip+"/ARLContent/"+this.ID).then(res => {
            this.item=res.data.content
            this.itemHMIbook=res.data.content.HMI_book[0];
            this.itemFuncbook=res.data.content.func_book[0];
            this.itemdestCategory=res.data.content.dest_category;
            this.itemmanageMemo=res.data.content.manage_memo;	
          })	
      	}     
     },
     methods:{
	 	back(){
	             this.$router.push({name:'List'})
				}
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
    }
    table{
      width:100%;
      border-left: 20px solid rgb(205,164,59);
      text-align: center;
    }
    tr{
      width: 100%;
      color: rgb(205,164,59);
    }
    .fir-table td{
      width: 50%;
      word-break:break-all; 
    }
    .second_table td{
      width:25%;
      word-break:break-all; 
    }
     .table-span{
      display: block;
      *display: none;
      padding:2px 5px ;
    }
    .msg1{
      background: rgb(89,89,89);
      color:rgb(205,164,59) 
    }
    .msg2{
      background: rgb(150,150,146);
      color: white;
    }
    .msg3{
      background: rgb(54,54,54);
      color:rgb(205,164,59);
    }
    .msg4{
      background: rgb(130,130,125);
      color: white;
    }
    .Asa-title{
      width:100%;
      margin: 0 auto;
      margin-top:5%;
    }
    .fixed{
  	width: 60px;
    height: 22%;
    position: fixed;
    right: 5%;
    bottom: 40%;
    /*border: 1px solid red;*/
  }
  .back{
  	width: 60px;
    height: 60px;
    text-align: center;
    line-height: 40px;
    
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    background: #cda43b;
    margin: 25% 0;
    opacity: 0.5;
    border: 0 none;
    outline: none;
  }
  .back:hover{
	opacity: 1;
	color: white;
	} 
</style>
